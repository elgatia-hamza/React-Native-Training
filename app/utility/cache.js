import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const PREFIX = 'cache';
const expiryOnMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(PREFIX + key, JSON.stringify(item));
  } catch (error) {
    console.log('error');
  }
};

const isExpired = item => {
  const now = moment(Date.now());
  const storedOn = moment(item.timestamp);
  return now.diff(storedOn, 'minutes') > expiryOnMinutes;
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(PREFIX + key);
    const item = JSON.parse(value);

    if (!item) {
      return null;
    }

    if (isExpired(item)) {
      // Command Query Seperation (CQS)
      // Command: update system state
      // Query: get system state
      await AsyncStorage.removeItem(PREFIX + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log('error');
  }
};

export default {
  store,
  get,
};
