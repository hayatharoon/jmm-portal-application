import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '../assets/data/data';
import LoginContainer from '../Components/organisms/LoginContainer/LoginContainer';
import EmployeeContainer from '../Components/organisms/EmployeeContainer/EmployeeContainer';
import { Suspense } from 'react';
import Spinner from '../Components/atoms/Spinner/Spinner';

const AppRoutes = () => {
  const token = JSON.parse(localStorage.getItem('_loginToken'));
  const history = useHistory();
  console.log('token', token);

  if (!token) {
    history.push(ROUTES.LOGIN);
  }

  return (
    <Suspense fallback={<Spinner style={{ position: 'absolute' }} />}>
      <Switch>
        <Route path={ROUTES.LOGIN}>
          <LoginContainer />
        </Route>
        <Route path={ROUTES.HOME}>
          <EmployeeContainer />
        </Route>
        <Route path={ROUTES.EMPLOYEE}>
          <EmployeeContainer />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
