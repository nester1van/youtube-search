import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import getVideos, { setQuery, setQueryName, 
  setMaxResults, setSortBy } from '../../redux/search/actions';
import { setShowModalEdit } from '../../redux/appearance/actions';
import { setQueryF, setQueryNameF, 
  setMaxResultsF, setSortByF } from '../../redux/favorites/actions';

const FavoriteItem = ({ queryF, nameF, maxResultsF, sortByF,
  setQuery, setQueryName, setMaxResults, setSortBy, getVideos,
  setShowModalEdit, setQueryF, setQueryNameF, setMaxResultsF, setSortByF }) => {

  const handleExecute = () => {
    setQuery(queryF);
    setQueryName(nameF);
    setMaxResults(maxResultsF);
    setSortBy(sortByF);
    getVideos(queryF, maxResultsF, sortByF);
  };

  const handleEdit = () => {
    console.log(queryF);
    setQueryF(queryF);
    setQueryNameF(nameF);
    setMaxResultsF(maxResultsF);
    setSortByF(sortByF);
    setShowModalEdit(true);
  }
  
  return (
    <div>
      {nameF}
      <Button onClick={handleExecute}>Выполнить</Button>
      <Button onClick={handleEdit}>Изменить</Button>
      <Button>Удалить</Button>
    </div>
  )
};

// const mapStateToProps = (state) => ({

// })

export default connect(null, 
  { setQuery, setQueryName, setMaxResults, setSortBy, getVideos, 
    setShowModalEdit, setQueryF, setQueryNameF, setMaxResultsF, setSortByF })(FavoriteItem);