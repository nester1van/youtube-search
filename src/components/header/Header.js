import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {setUserLogin, setUserPW} from '../../redux/user/actions';
import {setToken} from '../../redux/token/actions';

const Header = ({token, setUserLogin, setUserPW, setToken}) => {
  const handelClick = () => {
    setUserLogin('');
    setUserPW('');
    setToken('', 0);
  };

  return (
    token ? 
    (<>
      <Link to='/searchpage'>Поиск</Link>
      <Link to='/favorites'>Избранное</Link>
      <Button variant='outline-primary' onClick={handelClick}>Выйти</Button>
    </>
    ) : (null)
  )
};

const mapStateToProps = (store) => ({
  token: store.token.token
});

export default connect(mapStateToProps, 
  {setUserLogin, setUserPW, setToken})(Header);