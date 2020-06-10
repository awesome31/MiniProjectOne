import {useState} from 'react';

const useSignup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repasswordError, setRepasswordError] = useState('');

  return {
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
  };
};

export default useSignup;
