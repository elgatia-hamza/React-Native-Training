import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import routes from '../navigation/routes';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    padding: 10,
  },
  logo: {
    height: 65,
    width: 150,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  tagline: {
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 10,
  },
});

const imageUri = require('../assets/home-1.jpg');

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={imageUri} style={styles.background} blurRadius={3}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo-axelor.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.RIGISTER)}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
