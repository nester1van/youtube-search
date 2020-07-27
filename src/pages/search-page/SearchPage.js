import React, {useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { setQuery, setMaxResults, setQueryName, setSortBy } from '../../redux/search/actions';
import SearchForm from './SearchForm';
import ItemsLayout from './ItemsLayout';
import VideoItem from './VideoItem';
import ModalAddToFavorites from './ModalAddToFavorites';
import { setShowModalAdd } from '../../redux/appearance/actions';
import './searchPage.css';

import {setArrDataFInF} from '../../redux/favorites/actions';
import {setIsDataFFromLS} from '../../redux/user/actions';

const SearchPage = ({ login, isShownAdd, setShowModalAdd, 
  query, setQuery, maxResults, setMaxResults, name, 
  setQueryName, sortBy, setSortBy, data, layout, dataF, setArrDataFInF, 
  isDataFFromLS, setIsDataFFromLS, viewCountArr }) => {
  const isFirstRun = useRef(true);
  const { items } = data;

  useEffect(() => {
    if (!isDataFFromLS) {
      console.debug('SearchPage: useEffect [login]');
      let arrDataF = localStorage.getItem(login);
      if (arrDataF) {
        arrDataF = JSON.parse(arrDataF);
        setArrDataFInF(arrDataF);
      } else {
        let dataFJSON = JSON.stringify([]);
        localStorage.setItem(login, dataFJSON);
        setArrDataFInF([]);
      }
      setIsDataFFromLS(true);
    }    
  }, [login]);

  useEffect(() => {        
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    console.debug('SearchPage: useEffect [dataF]');
    let dataFJSON = JSON.stringify(dataF);
    localStorage.setItem(login, dataFJSON);
  }, [dataF]);


  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className='search-page'>
      <h1 className='search-page__title'>Поиск видео</h1>
      
      <div className='videoItems'>
        <div className='videoItem__video'>
          <YouTube 
            className='videoItem__iframe'
            videoId='hq3yfQnllfQ' 
            opts={opts}/>
        </div>
        <div className='videoItem__video'>
          <YouTube 
            className='videoItem__iframe' 
            videoId='hq3yfQnllfQ' 
            opts={opts}/>
        </div>
        <div className='videoItem__video'>
          <YouTube 
            className='videoItem__iframe' 
            videoId='hq3yfQnllfQ' 
            opts={opts}/>
        </div>
        <div className='videoItem__video'>
          <YouTube 
            className='videoItem__iframe' 
            videoId='hq3yfQnllfQ' 
            opts={opts}/>
        </div>
        <div className='videoItem__video'>
          <YouTube 
            className='videoItem__iframe'
            videoId='hq3yfQnllfQ' 
            opts={opts}/>
        </div>
        <div className='videoItem__video'>
          <YouTube 
            className='videoItem__iframe' 
            videoId='hq3yfQnllfQ' 
            opts={opts}/>
        </div>
        <div className='videoItem__video'>
          <YouTube 
            className='videoItem__iframe' 
            videoId='hq3yfQnllfQ' 
            opts={opts}/>
        </div>
        <div className='videoItem__video'>
          <YouTube 
            className='videoItem__iframe' 
            videoId='hq3yfQnllfQ' 
            opts={opts}/>
        </div>
      </div>
      

      <SearchForm/>
      
      {(items && items.length !== 0) ? 
       <>
          <ItemsLayout/>
          <div className='search-page__flex-container'> 
            {items.map((item, index) => {
              const { id: {videoId},
                snippet: {channelTitle, title, thumbnails:{high: {url}}} } = item;
            return <VideoItem
              key={videoId}
              id = {videoId}
              url={url}
              title={title}
              channelTitle={channelTitle}
              viewCount={viewCountArr[index]}/> 
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
  isDataFFromLS: state.user.isDataFFromLS,
  query: state.search.query,
  maxResults: state.search.maxResults,
  name: state.search.name,
  sortBy: state.search.sortBy,
  data: state.search.data,
  dataF: state.favorites.dataF,
  layout: state.appearance.layout,
  isShownAdd: state.appearance.isShownAdd,
  viewCountArr: state.viewCountArr.viewCountArr
}); 

export default connect(mapStateToProps, { setShowModalAdd, setQuery, setMaxResults, setQueryName, setSortBy, setArrDataFInF, setIsDataFFromLS })(SearchPage);

