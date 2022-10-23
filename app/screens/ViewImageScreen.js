import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  header: {
    flex: 1,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.closeIcon}>
        <Icon name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Icon name="trash-can-outline" color="white" size={35} />
      </View>
    </View>
  );
};

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={require('../assets/home.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default ViewImageScreen;
