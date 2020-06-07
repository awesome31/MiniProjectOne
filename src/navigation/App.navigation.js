import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../pages/Login/login.component';
import SplashScreen from '../pages/Splash/splash.component';
import SignupScreen from '../pages/Signup/signup.component';

const StackNavigator = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
  },
  {
    initialRouteName: 'Login',
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Main: StackNavigator,
  },
  {initialRouteName: 'Splash'},
);

export const AppNavigator = createAppContainer(SwitchNavigator);
