import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ children, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
    />
  )
};

const mapStateToProps = (store) => ({
  token: store.token.token
});

export default connect(mapStateToProps)(ProtectedRoute);