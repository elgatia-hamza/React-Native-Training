import jwtDecode from 'jwt-decode';

const {
  setItemAsync,
  getItemAsync,
  deleteItemAsync,
} = require('expo-secure-store');

const KEY = 'authToken';

const storeToken = async authToken => {
  try {
    await setItemAsync(KEY, authToken);
  } catch (error) {
    console.log('Error while storing the auth token:', error.message);
  }
};

const getToken = async () => {
  try {
    return await getItemAsync(KEY);
  } catch (error) {
    console.log('Error while getting the auth token:', error.message);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    return await deleteItemAsync(KEY);
  } catch (error) {
    console.log('Error while removing the auth token:', error.message);
  }
};

export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
};
