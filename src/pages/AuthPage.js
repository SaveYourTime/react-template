import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import fakeAuth from '../utils/fakeAuth';

const AuthPage = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>
        You must log in to view the page at
        {from.pathname}
      </p>
      <button type="button" onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default AuthPage;
