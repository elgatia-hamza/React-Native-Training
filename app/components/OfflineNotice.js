import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import colors from '../config/colors';
import Text from './Text';

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    elevation: Platform.OS === 'android' ? 1 : 0,
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
