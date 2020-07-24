import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
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

  let pathName = useLocation().pathname;

  return (
    token ? 
    (<header className='header'>
      <Container className='header__container'>
        <Row className='header__row'>
          <Col className='heder__col' md={5}>      
            <img className='header__logo' src={logo} alt='logo'/>
            <Link 
              className={'header__item-search' + (pathName === '/searchpage' ? ' header__item-search_active' : '')} 
              to='/searchpage'>Поиск</Link>
            <Link 
              className={'header__item-favorites' + (pathName === '/favorites' ? ' header__item-favorites_active' : '')} 
              to='/favorites'>Избранное</Link></Col>
          <Col className='heder__col' md={{span: 2, offset: 5}}>
            <Button className='header__item-exit' variant='outline-primary' onClick={handelClick}>Выйти</Button>
          </Col>
        </Row>
      </Container>      
    </header>
    ) : (null)
  )
};

const mapStateToProps = (state) => ({
  token: state.token.token
});

export default connect(mapStateToProps, 
  {setUserLogin, setUserPW, setToken})(Header);