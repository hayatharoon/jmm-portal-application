import React, { useEffect, useState } from 'react';
import Login from '../../molecules/Login/Login';

const LoginContainer = () => {
  console.log('aaaa');
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    let session = localStorage.getItem('_loginToken');
    session = JSON.parse(session);
    if (session && session.jwToken) {
    } else {
      setShowLogin(true);
    }
  }, []);
  return showLogin ? <Login /> : null;
};

export default LoginContainer;
