import React from 'react';
import { connect } from 'react-redux';
import { setLayoutVideos } from '../../redux/appearance/actions';
import './itesLayout.css';

const ItemsLayout = ({ query, totalResults, setLayoutVideos, layout }) => {

  const handleList = () => {
    setLayoutVideos('list');
  };

  const handleGallery = () => {
    setLayoutVideos('gallery');
  };

  return (
    <div className='layout'>
      <p className='layout__query'>
        Видео по запросу "{query}" 
        <span className='layout__total-results'>{totalResults}</span></p>
      <div className='layout__types'>
      <span 
        className={'layout__list' + 
          (layout === 'list' ? ' layout__list_active' : '')}
        onClick={handleList}></span>
      <span 
        className={'layout__gallery' + 
          (layout === 'gallery' ? ' layout__gallery_active' : '')} 
        onClick={handleGallery}></span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  query: state.search.query,
  totalResults: state.search.data.pageInfo.totalResults,
  layout: state.appearance.layout
})

export default connect(mapStateToProps, { setLayoutVideos })(ItemsLayout);