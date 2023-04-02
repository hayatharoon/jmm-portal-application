import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../assets/data/data';
import Employee from '../../molecules/Employee/Employee';
import NotificationTicket from '../../atoms/NotificationTicket/NotificationTicket';

const EmployeeContainer = () => {
  const [showEmployee, setShowEmployee] = useState(false);
  const [notification, setNotificaion] = useState(false);
  const history = useHistory();
  useEffect(() => {
    let session = localStorage.getItem('_loginToken');
    session = JSON.parse(session);
    if (session && session.jwtToken) {
      setShowEmployee(true);
      setNotificaion(true);
    } else {
      history.push(ROUTES.LOGIN);
    }
  }, []);

  return (
    <>
      {notification && <NotificationTicket msg={{ text: 'User Login Sucessfully', type: 'success' }} />}
      {showEmployee ? <Employee /> : null}
    </>
  );
};

export default EmployeeContainer;
