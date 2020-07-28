import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Form, InputGroup } from 'react-bootstrap'; 
import BtnLogin from './BtnLogin';
import logo from '../../img/sibdev-logo.png';
import './authorizationPage.css';
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
  
  const pwInput = useRef(null);

  const handleVisibilityPW = (e) => {
    const type = pwInput.current.type;
    if (type === 'password') {
      pwInput.current.type = 'text';
      let className = e.target.className;
      e.target.className = className.replace(
        'authorization__pw-input-vs_password', 'authorization__pw-input-vs_text'); 
    } else {
      pwInput.current.type = 'password';
      let className = e.target.className;
      e.target.className = className.replace(
        'authorization__pw-input-vs_text', 'authorization__pw-input-vs_password');
    }
  }

  return (
    <div className='authorization'>
      <img className='logo' src={logo} alt='logo'/>
      <h1 className='authorization__title'>Вход</h1>
      <Form className='authorizatin__form'>
        <Form.Group className='authorization__login-group'>
          <Form.Label className='authorization__login-label'>Логин</Form.Label>
          <Form.Control 
            className='authorization__login-input' 
            type='text' 
            value={login} 
            onChange={handleChangeLogin}/>  
          </Form.Group>
        <Form.Group className='authorization__pw-group'>
          <Form.Label className='authorization__pw-label'>Пароль</Form.Label>
          <InputGroup className='authorization__pw-input-group'>
            <Form.Control 
              className='authorization__pw-input' 
              type='password' 
              value={password} 
              ref={pwInput}
              onChange={handleChangePW}/>
            <InputGroup.Append>
              <InputGroup.Text 
                className='authorization__pw-input-vs_password'
                onClick={handleVisibilityPW} 
              ></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <BtnLogin/>
      </Form>
    </div>
  )
};

const mapStateToProps = (state) => ({
  login: state.user.login,
  password: state.user.password
});

export default connect(mapStateToProps, { setUserLogin, setUserPW })(AuthorizationPage);