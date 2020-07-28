import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import FavoriteItems from './FavoriteItems';
import ModalEditFavorite from './ModalEditFavorite';
import './favoritesPage.css';

const FavoritesPage = ({login, dataF}) => {
  const isFirstRun = useRef(true);

  useEffect(() => { 
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    console.debug('FavoritesPage: useEffect [dataF]');   
    let dataFJSON = JSON.stringify(dataF);
    localStorage.setItem(login, dataFJSON);
  }, [dataF]);
  
  return (
    <div className='favorites-page'>
      <h1 className='favorites-page__title'>Избранное</h1>
      <FavoriteItems/>
      <ModalEditFavorite/>
    </div>
  )
};

const mapStateToProps = (state) => {
  const { user: { login },
    favorites: { dataF }
  } = state;
  return ({
    login,
    dataF
  })
};

export default connect(mapStateToProps)(FavoritesPage);