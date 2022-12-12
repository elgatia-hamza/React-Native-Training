import React from 'react';
import Lottie from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

function ActivityIndicator({visible = false}) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Lottie
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.8,
    zIndex: 1,
  },
});

export default ActivityIndicator;
