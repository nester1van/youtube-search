import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Modal } from 'react-bootstrap';
import { setQuery, setMaxResults, setQueryName, setSortBy } from '../../redux/search/actions';
import SearchForm from './SearchForm';
import ItemsLayout from './ItemsLayout';
import VideoItem from './VideoItem';
import ModalAddToFavorites from './ModalAddToFavorites';
import { setShowModalAdd } from '../../redux/appearance/actions';
import './searchPage.css';

const SearchPage = ({ isShownAdd, setShowModalAdd, query, setQuery, maxResults, setMaxResults, name, setQueryName, sortBy, setSortBy, data, layout }) => {

  const { items } = data;

  return (
    <>
      <h1>Поиск видео</h1>
      <SearchForm/>
      
      {(items && items.length !== 0) ? 
       <>
          <ItemsLayout/>
          {items.map(item => {
            const { id: {videoId},
              snippet: {channelTitle, title, thumbnails:{high: {url}}} } = item;
          return <VideoItem
            key={videoId}
            url={url}
            title={title}
            channelTitle={channelTitle}/> 
          })}
       </>
       : null}
      {/* 9829 black heart */}

      <ModalAddToFavorites/>
    </>
  )
};

const mapStateToProps = (state) => ({
  query: state.search.query,
  maxResults: state.search.maxResults,
  name: state.search.name,
  sortBy: state.search.sortBy,
  data: state.search.data,
  layout: state.appearance.layout,
  isShownAdd: state.appearance.isShownAdd
}); 

export default connect(mapStateToProps, { setShowModalAdd, setQuery, setMaxResults, setQueryName, setSortBy })(SearchPage);

