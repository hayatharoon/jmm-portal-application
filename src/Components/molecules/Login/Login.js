import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authLogin } from '../../../services/auth.services';
import { ROUTES } from '../../../assets/data/data';
import Spinner from '../../atoms/Spinner/Spinner';
import Typography from '../../atoms/Typography/Typography';
import NotificationTicket from '../../atoms/NotificationTicket/NotificationTicket';

import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotificaion] = useState(false);

  console.log('Login');
  const history = useHistory();

  const handeInput = (e) => {
    e.preventDefault();
    if (e.target.name === 'email') {
      console.log(e.target.value);
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        setLoading(true);
        const resp = await authLogin({ email, password });
        console.log('response', resp);
        if (resp && resp.data && resp.data.token) {
          localStorage.setItem('_loginToken', JSON.stringify({ jwtToken: resp.data.token }));
          setNotificaion(true);
          history.push(ROUTES.EMPLOYEE);
        } else {
          console.log('Error occure', resp);
        }
      } catch (error) {
        console.log('something want wrong in the login API', error);
      } finally {
        setNotificaion(true);
        setLoading(false);
      }
    }
  };
  return loading ? (
    <Spinner style={{ position: 'absolute' }} />
  ) : (
    <>
      {notification && <NotificationTicket msg={{ text: 'User Login Sucessfully', type: 'success' }} />}
      <div className='login-form-container'>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className='login-form'>
          <div className='form-header'>
            <Typography priority={1} styles={{ fontSize: '20px', padding: '0px', margin: '4px 0px' }}>
              Login
            </Typography>
            <Typography color='#A9A9AC' styles={{ fontSize: '12px', padding: '0px', margin: '0px 0px 50px 0px' }}>
              Enter credentials to get access
            </Typography>
          </div>

          <div className='login-form-input-container'>
            <Typography className='input-label' styles={{ color: '#92959a', margin: '0px 0px 4px' }}>
              Email
            </Typography>
            <input
              className='login-form-input'
              name='email'
              type='text'
              placeholder='Enter email'
              required={true}
              value={email}
              onChange={(e) => handeInput(e)}
            />
          </div>

          <div className='login-form-input-container'>
            <Typography className='input-label' styles={{ color: '#92959a', margin: '0px 0px 4px' }}>
              Password
            </Typography>
            <input
              className='login-form-input'
              name='password'
              type='password'
              placeholder='Enter password'
              required={true}
              value={password}
              onChange={(e) => handeInput(e)}
            />
          </div>

          <div className='login-form-checkbox'>
            <input type='checkbox' name='' id='' />
            <Typography className='input-label' styles={{ fontSize: '12px', color: '#92959a', margin: '2px 0 0 0' }}>
              Save Credentials
            </Typography>
          </div>

          <button className='login-form-submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
