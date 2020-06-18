import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import fakeAuth from '../utils/fakeAuth';

const ProtectedPage = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  const logout = () => {
    fakeAuth.signout(() => {
      history.replace(from);
    });
  };

  return (
    <button type="button" onClick={logout}>
      Log out
    </button>
  );
};

export default ProtectedPage;
