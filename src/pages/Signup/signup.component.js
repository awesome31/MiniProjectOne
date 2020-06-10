import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './signup.styles';
import useSignup from './Signup.hook';
import validator from 'validator';
const SignupScreen = (props) => {
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    repassword,
    setRepassword,
    emailError,
    setEmailError,
    usernameError,
    setUsernameError,
    passwordError,
    setPasswordError,
    repasswordError,
    setRepasswordError,
  } = useSignup();

  const onSignPress = () => {
    setEmailError('');
    setPasswordError('');
    setRepasswordError('');
    setUsernameError('');
    const isEmail = validator.isEmail(email);
    if (
      isEmail &&
      password === repassword &&
      email !== '' &&
      password !== '' &&
      username !== '' &&
      repassword !== ''
    ) {
      Alert.alert('Sign up success');
    }
    if (password === '') {
      setPasswordError('Password cannot be empty.');
    }
    if (username === '') {
      setUsernameError('Username cannot be empty.');
    }
    if (repassword === '') {
      setRepasswordError('Re entered passwords cannot be empty.');
    }
    if (!isEmail) {
      setEmailError('Enter a valid email.');
    }
    if (password !== repassword) {
      setRepasswordError('Re entered password doesnt match.');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/Logo.png')} />
      </View>
      <View style={styles.formContainer}>
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          errorMessage={emailError}
        />
        <Input
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          errorMessage={usernameError}
        />
        <Input
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          errorMessage={passwordError}
        />
        <Input
          label="Re-enter password"
          value={repassword}
          onChangeText={(text) => setRepassword(text)}
          errorMessage={repasswordError}
        />

        <Button
          title="Sign Up"
          type="outline"
          buttonStyle={styles.loginButtonContainer}
          titleStyle={styles.loginTitleContainer}
          onPress={onSignPress}
        />
        <TouchableOpacity
          style={styles.signUpTouchableContainer}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.signUpRedirectContainer}>
            Already a member? Sign in.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SignupScreen['navigationOptions'] = (screenProps) => ({
  headerShown: false,
});

export default SignupScreen;
