import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from '../../utils/fakeAuth';

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      fakeAuth.isAuthenticated ? (
        children
      ) : (
        <Redirect to={{ pathname: '/auth', state: { from: location } }} />
      )
    }
  />
);

export default PrivateRoute;
