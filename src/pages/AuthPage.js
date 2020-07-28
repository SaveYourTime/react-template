import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { loginWithFB, loginWithGoogle } from '../apis';
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

  const loginWithLine = () => {
    window.location.href = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${
      process.env.REACT_APP_LINE_CHANNEL_ID
    }&redirect_uri=${
      process.env.REACT_APP_LINE_REDIRECT_URI
    }&state=${Math.random()}&scope=profile%20openid%20email`;
  };

  const responseFacebook = (response) => {
    const { accessToken, email } = response;

    if (accessToken && email) {
      loginWithFB(accessToken).then(console.log).catch(console.log);
    } else {
      console.log('not calling api');
    }
  };

  const responseGoogle = ({ tokenId }) => {
    if (tokenId) {
      loginWithGoogle(tokenId).then(console.log).catch(console.log);
    } else {
      console.log('not calling api');
    }
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
      <button type="button" onClick={loginWithLine}>
        <img src="https://img.icons8.com/color/240/000000/line-me.png" width="48" alt="" />
      </button>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        authType="rerequest"
        scope="public_profile,email"
        returnScopes
        fields="name,email,picture"
        callback={responseFacebook}
        version="7.0"
      />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default AuthPage;
