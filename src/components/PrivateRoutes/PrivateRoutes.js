import React from 'react';

import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ isLogged, children }) => {
  console.log('inside Private Routes');

  const login = sessionStorage.getItem('isLogged');
  console.log(isLogged);
  return (
    <Route
      render={() =>
        login ? children : <Redirect to={'/loginpage'}></Redirect>
      }
    ></Route>
  );
};
export default PrivateRoute;
