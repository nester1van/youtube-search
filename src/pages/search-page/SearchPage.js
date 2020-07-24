import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { setQuery, setMaxResults, setQueryName, setSortBy } from '../../redux/search/actions';
import SearchForm from './SearchForm';
import ItemsLayout from './ItemsLayout';
import VideoItem from './VideoItem';
import ModalAddToFavorites from './ModalAddToFavorites';
import { setShowModalAdd } from '../../redux/appearance/actions';
import './searchPage.css';

import {addArrDataFToF} from '../../redux/favorites/actions';

const SearchPage = ({ login, isShownAdd, setShowModalAdd, query, setQuery, maxResults, setMaxResults, name, setQueryName, sortBy, setSortBy, data, layout, addArrDataFToF }) => {

  const { items } = data;

  useEffect(() => {
    console.log()
    let arrDataF = localStorage.getItem(login);
    if (arrDataF) {
      arrDataF = JSON.parse(arrDataF);
      addArrDataFToF(arrDataF);
    } else {
      let dataFJSON = JSON.stringify([]);
      localStorage.setItem(login, dataFJSON);
      addArrDataFToF([]);
    }
  }, [login]);

  return (
    <div className='search-page'>
      <h1 className='search-page__title'>Поиск видео</h1>
      <SearchForm/>
      
      {(items && items.length !== 0) ? 
       <>
          <ItemsLayout/>
          <div className='search-page__flex-container'> 
            {items.map(item => {
              const { id: {videoId},
                snippet: {channelTitle, title, thumbnails:{high: {url}}} } = item;
            return <VideoItem
              key={videoId}
              url={url}
              title={title}
              channelTitle={channelTitle}/> 
            })}
          </div>
       </>
       : null}
      {/* 9829 black heart */}

      <ModalAddToFavorites/>
    </div>
  )
};

const mapStateToProps = (state) => ({
  login: state.user.login,
  query: state.search.query,
  maxResults: state.search.maxResults,
  name: state.search.name,
  sortBy: state.search.sortBy,
  data: state.search.data,
  layout: state.appearance.layout,
  isShownAdd: state.appearance.isShownAdd
}); 

export default connect(mapStateToProps, { setShowModalAdd, setQuery, setMaxResults, setQueryName, setSortBy, addArrDataFToF })(SearchPage);

