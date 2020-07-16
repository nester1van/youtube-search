import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to='/searchpage'>Поиск</Link>
      <Link to='/favorites'>Избранное</Link>
    </>
  )
};

export default Header;