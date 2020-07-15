import React from 'react';
import GoogleLogin from 'react-google-login';
import { gapiClient } from '../../config';
import Button from 'react-bootstrap/Button';
import './authorizationPage.css';

const BtnLogin = () => {

  function responseGoogle(res){
    console.log(res);
    console.log('todo after');
  }

  function handleClick(renderProps){
    console.log('todo before');
    renderProps.onClick();
    
  }
  console.log(gapiClient);
  return (
    <GoogleLogin
      clientId={gapiClient.clientId}
      render={renderProps => (
        <Button variant="primary" className="btn-enter" onClick={() => handleClick(renderProps)} disabled={renderProps.disabled}>Войти</Button>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default BtnLogin;