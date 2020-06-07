import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: '5%',
    display: 'flex',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
  },
  formContainer: {
    flex: 6,
    justifyContent: 'center',
  },
  loginButtonContainer: {
    backgroundColor: '#4388D6',
    height: '27%',
    marginTop: '10%',
  },
  loginTitleContainer: {
    color: 'white',
    fontSize: 20,
  },
  signUpTouchableContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
  signUpRedirectContainer: {
    fontSize: 18,
    color: '#4388D6',
    fontWeight: 'bold',
  },
});

export default styles;
