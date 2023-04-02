import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../assets/data/data';
import Employee from '../../molecules/Employee/Employee';

const EmployeeContainer = () => {
  const [showEmployee, setShowEmployee] = useState(false);
  const history = useHistory();
  useEffect(() => {
    let session = localStorage.getItem('_loginToken');
    session = JSON.parse(session);
    if (session && session.jwtToken) {
      setShowEmployee(true);
    } else {
      history.push(ROUTES.LOGIN);
    }
  }, []);

  return showEmployee ? <Employee /> : null;
};

export default EmployeeContainer;
