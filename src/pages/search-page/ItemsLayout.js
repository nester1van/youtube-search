import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setLayoutVideos } from '../../redux/appearance/actions';


const ItemsLayout = ({ query, totalResults, setLayoutVideos }) => {

  const handleList = () => {
    setLayoutVideos('list');
  };

  const handleGallery = () => {
    setLayoutVideos('gallery');
  };

  return (
    <>
        Видео по запросу "{query}" <span>{totalResults}</span>
      <Button onClick={handleList}>List</Button>
      <Button onClick={handleGallery}>Gallery</Button>        
    </>
  );
};

const mapStateToProps = (state) => ({
  query: state.search.query,
  totalResults: state.search.data.pageInfo.totalResults
})

export default connect(mapStateToProps, { setLayoutVideos })(ItemsLayout);