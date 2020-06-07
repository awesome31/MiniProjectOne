import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './splash.styles';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Main');
    }, 2000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image source={require('../../../assets/Logo.png')} />
    </View>
  );
};

export default SplashScreen;
