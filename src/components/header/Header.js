import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {setUserLogin, 
  setUserPW, setIsDataFFromLS} from '../../redux/user/actions';
import {setToken} from '../../redux/token/actions';
import {setQuery, setMaxResults, 
  setQueryName, setSortBy, setData} from '../../redux/search/actions';
import logo from '../../img/sibdev-logo.png';
import './header.css';

const Header = ({token, setUserLogin, setUserPW, setToken, setIsDataFFromLS, 
  setQuery, setMaxResults, setQueryName, setSortBy, setData}) => {
  const handelClick = () => {
    setUserLogin('');
    setUserPW('');
    setToken('', 0);
    setQuery('');
    setMaxResults(12);
    setQueryName('');
    setSortBy('viewCount');
    setData({});
    localStorage.removeItem('token');
    localStorage.removeItem('userLogin');
    setIsDataFFromLS(false);
  };

  let pathName = useLocation().pathname;

  return (
    token ? 
    (<header className='header'>
      <div className='head__group'>
        <img className='header__logo' src={logo} alt='logo'/>
        <Link 
          className={'header__item-search' + 
            (pathName === '/searchpage' ? ' header__item-search_active' : '')} 
          to='/searchpage'>Поиск</Link>
        <Link 
          className={'header__item-favorites' + 
            (pathName === '/favorites' ? ' header__item-favorites_active' : '')} 
          to='/favorites'>Избранное</Link>
      </div>
      <div className='head__group'>
      <Button 
        className='header__item-exit' 
        variant='outline-primary' 
        onClick={handelClick}>Выйти</Button>
      </div>
    </header>) : (null)
  )
};

const mapStateToProps = (state) => ({
  token: state.token.token
});

export default connect(mapStateToProps, 
  {setUserLogin, setUserPW, setToken, setIsDataFFromLS,
    setQuery, setMaxResults, setQueryName, setSortBy, setData})(Header);