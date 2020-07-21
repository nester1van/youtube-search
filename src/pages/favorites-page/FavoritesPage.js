import React from 'react';
import FavoriteItems from './FavoriteItems';
import ModalEditFavorite from './ModalEditFavorite';

const FavoritesPage = () => {
  return (
    <>
      <h1>Избранное</h1>
      <FavoriteItems/>
      <ModalEditFavorite/>
    </>
  )
};

export default FavoritesPage;