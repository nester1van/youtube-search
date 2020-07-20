import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap'; 
import BtnLogin from './BtnLogin';

import { setUserLogin, setUserPW } from '../../redux/user/actions';

const AuthorizationPage = ({ login, password, setUserLogin, setUserPW }) => {
  
  const handleChangeLogin = (e) => {
    const value = e.target.value;
    setUserLogin(value);
  }

  const handleChangePW = (e) => {
    const value = e.target.value;
    setUserPW(value);
  }
  
  return (
    <Form>
      <Form.Control 
        type='text' 
        value={login} 
        onChange={handleChangeLogin}/>
      <Form.Control 
        type='password' 
        value={password} 
        onChange={handleChangePW}/>
      <BtnLogin/>
    </Form>
  )
};

const mapStateToProps = (state) => ({
  login: state.user.login,
  password: state.user.password
});

export default connect(mapStateToProps, { setUserLogin, setUserPW })(AuthorizationPage);