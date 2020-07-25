import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setToken } from '../../redux/token/actions';
import { setUserLogin } from '../../redux/user/actions';

const LocalStorage = ({ children, setToken, setUserLogin }) => {
  
  useEffect(() => {
    console.debug('LocalStorage: useEffect []');
    const now = new Date().getTime();
    let token = localStorage.getItem('token');
    if (token) {
      // console.log(token);
      let tokenObj = JSON.parse(token);
      // console.log(tokenObj);
      const expiry = parseInt(tokenObj.expiry);
      if (expiry > now) {
        setToken(tokenObj.token, expiry);
        const userLogin = localStorage.getItem('userLogin');
        setUserLogin(userLogin);
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('userLogin');
      }
    }
  }, []);
  
  return (
    <>
      {children}
    </>
  )

};

export default connect(null, {setToken, setUserLogin})(LocalStorage);