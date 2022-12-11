import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {ErrorMessage, Form, FormField, SubmitButton} from '../components/forms';
import apiAuth from '../api/auth';
import useAuth from '../auth/useAuth';

const LoginScreen = () => {
  const auth = useAuth();
  const [loginFailed, setLoginFaild] = useState(false);

  const handleSubmit = async loginInfo => {
    setLoginFaild(false);
    const response = await apiAuth.login(loginInfo.email, loginInfo.password);

    if (!response.ok) {
      return setLoginFaild(true);
    }

    auth.login(response.data);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-axelor.png')}
        resizeMode="stretch"
      />
      <Form
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage
          error="Invalid password and/or email!"
          visible={loginFailed}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 65,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
