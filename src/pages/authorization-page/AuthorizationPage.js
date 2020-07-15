import React from 'react';
import { Form } from 'react-bootstrap'; 
import BtnLogin from './BtnLogin';

const AuthorizationPage = () => {
  return (
    <Form>
      <Form.Control type='text' placeholder='Логин'/>
      <Form.Control type='password' placeholder='Password'/>
      <BtnLogin/>
    </Form>
  )
};

export default AuthorizationPage;