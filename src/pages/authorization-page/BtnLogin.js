import React from 'react';
import { connect } from 'react-redux';
import { setUserLogin, setUserPW } from '../../redux/user/actions';
import { setToken } from '../../redux/token/actions';
import GoogleLogin from 'react-google-login';
import { gapiClient } from '../../config';
import Button from 'react-bootstrap/Button';
import userValidation from '../../mock-server/userValidation';
import { Redirect } from 'react-router-dom';

const BtnLogin = ({ login, password, 
  setUserLogin, setUserPW, token, setToken }) => {

  function responseGoogle(res){
    if (res.error) {
      console.log(res.error);
    } else {
      const {tokenObj: {access_token, expires_at} } = res;
      setToken(access_token, expires_at);
      const tokenJSON = JSON.stringify({token: access_token, expiry: expires_at});
      localStorage.setItem('token', tokenJSON);
      localStorage.setItem('userLogin', login);
    }
  }

  function handleClick(renderProps){
    if (userValidation(login, password)) {
      // вызов responseGoogle
      renderProps.onClick();
    } else {
      setUserLogin('');
      setUserPW('');
      console.log("Login or password isn't valid");    
    }
  };

  return (
    <div className='btn-wrapper'>
      {token ? <Redirect to='/searchpage'/> :
      <GoogleLogin
        clientId={gapiClient.clientId}
        render={renderProps => (
          <Button 
            variant="primary" 
            className="btn-enter" 
            onClick={() => handleClick(renderProps)} 
            disabled={renderProps.disabled}>Войти</Button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  login: state.user.login,
  password: state.user.password,
  token: state.token.token
});

export default connect(mapStateToProps, { setUserLogin, setUserPW, setToken })(BtnLogin);