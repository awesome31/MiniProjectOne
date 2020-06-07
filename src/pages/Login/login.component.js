import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import styles from './login.styles';

const LoginScreen = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/Logo.png')} />
      </View>
      <View style={styles.formContainer}>
        <Input label="Username" />
        <Input label="Password" />
        <Button
          title="Sign In"
          type="outline"
          buttonStyle={styles.loginButtonContainer}
          titleStyle={styles.loginTitleContainer}
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Signup')}
          style={styles.signUpTouchableContainer}>
          <Text style={styles.signUpRedirectContainer}>
            Not a member yet? Create an account.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

LoginScreen['navigationOptions'] = (screenProps) => ({
  headerShown: false,
});

export default LoginScreen;
