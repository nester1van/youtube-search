import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import getVideos, { setQuery, setQueryName, 
  setMaxResults, setSortBy } from '../../redux/search/actions';
import { setShowModalEdit, setHeartFavorites } from '../../redux/appearance/actions';
import { setQueryF, setQueryNameF, 
  setMaxResultsF, setSortByF, setSelectedIdF,
  deleteQueryInF } from '../../redux/favorites/actions';
import './favoriteItem.css';

const FavoriteItem = ({ queryF, nameF, maxResultsF, sortByF,
  setQuery, setQueryName, setMaxResults, setSortBy, getVideos,
  setShowModalEdit, setQueryF, setQueryNameF, setMaxResultsF, setSortByF, 
  setSelectedIdF, id, deleteQueryInF, setHeartFavorites }) => {

  const handleExecute = () => {
    setQuery(queryF);
    setQueryName(nameF);
    setMaxResults(maxResultsF);
    setSortBy(sortByF);
    getVideos(queryF, maxResultsF, sortByF);
    setHeartFavorites('marked');
  };

  const handleEdit = () => {
    setQueryF(queryF);
    setQueryNameF(nameF);
    setMaxResultsF(maxResultsF);
    setSortByF(sortByF);
    setSelectedIdF(id);
    setShowModalEdit(true);
  }
  
  const handleDelete = () => {
    deleteQueryInF(id);
  }

  return (
    <div className='favoriteItem'>
      <p className='favoriteItem__name'>{nameF}</p>
      <Button 
        className='favoriteItem__btn-do' 
        onClick={handleExecute}>Выполнить</Button>
      <Button 
        className='favoriteItem__btn-change' 
        onClick={handleEdit}>Изменить</Button>
      <Button 
        className='favoriteItem__btn-delete' 
        onClick={handleDelete}>Удалить</Button>
    </div>
  )
};

// const mapStateToProps = (state) => ({

// })

export default connect(null, 
  { setQuery, setQueryName, setMaxResults, setSortBy, getVideos, 
    setShowModalEdit, setQueryF, setQueryNameF, setMaxResultsF, setSortByF,
    setSelectedIdF, deleteQueryInF, setHeartFavorites })(FavoriteItem);