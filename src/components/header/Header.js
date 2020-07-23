import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {setUserLogin, setUserPW} from '../../redux/user/actions';
import {setToken} from '../../redux/token/actions';
import logo from '../../img/sibdev-logo.png';
import './header.css';

const Header = ({token, setUserLogin, setUserPW, setToken}) => {
  const handelClick = () => {
    setUserLogin('');
    setUserPW('');
    setToken('', 0);
    localStorage.removeItem('token');
    localStorage.removeItem('userLogin');
  };

  return (
    token ? 
    (<header className='header'>
      <img className='header__logo' src={logo} alt='logo'/>
      <Link className='header__item' to='/searchpage'>Поиск</Link>
      <Link className='header__item' to='/favorites'>Избранное</Link>
      <Button className='header__item' variant='outline-primary' onClick={handelClick}>Выйти</Button>
    </header>
    ) : (null)
  )
};

const mapStateToProps = (state) => ({
  token: state.token.token
});

export default connect(mapStateToProps, 
  {setUserLogin, setUserPW, setToken})(Header);