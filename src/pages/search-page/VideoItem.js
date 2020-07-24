import React from 'react';
import { connect } from 'react-redux';
import './videoItem.css';

const VideoItem = ( { url, title, channelTitle, layout }) => {
  
  const changeLayout = () => {
    if (layout === 'list') {
      return 'list';
    } else {
      return 'gallery';
    }
  };

  return (
  <div className={'videoItem_' + changeLayout()}>
    <img className={'videoItem__image_' + changeLayout()} src={url}></img>
    <div className={'videoItem__text_' + changeLayout()}>
      <h3 className='videoItem__title'>{title}</h3>
      <p className='videoItem__channel-name'>{channelTitle}</p>
      <p className='videoItem__view-count'>75 000 тыс. просмотров</p>
    </div>
  </div>
  )
};

const mapStateToProps = (state) => ({
  layout: state.appearance.layout
});

export default connect(mapStateToProps)(VideoItem);