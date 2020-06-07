import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './signup.styles';
const SignupScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/Logo.png')} />
      </View>
      <View style={styles.formContainer}>
        <Input label="Email" />
        <Input label="Username" />
        <Input label="Password" />
        <Input label="Re-enter password" />

        <Button
          title="Sign Up"
          type="outline"
          buttonStyle={styles.loginButtonContainer}
          titleStyle={styles.loginTitleContainer}
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
