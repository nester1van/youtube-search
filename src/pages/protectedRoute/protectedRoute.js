import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


const ProtectedRoute = ({ children, token }) => {
  return (
    <>
    {token ? children : <Redirect to='/'/>}
    </>
  )
};

const mapStateToProps = (store) => ({
  token: store.token.token
});

export default connect(mapStateToProps)(ProtectedRoute);