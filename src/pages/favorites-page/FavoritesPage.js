import React from 'react';
import FavoriteItems from './FavoriteItems';
import ModalEditFavorite from './ModalEditFavorite';
import './favoritesPage.css';

const FavoritesPage = () => {
  return (
    <div className='favorites-page'>
      <h1 className='favorites-page__title'>Избранное</h1>
      <FavoriteItems/>
      <ModalEditFavorite/>
    </div>
  )
};

export default FavoritesPage;