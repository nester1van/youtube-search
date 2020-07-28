import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import './videoItem.css';

const VideoItem = ( {id, title, channelTitle, layout, viewCount }) => {
  console.log(id);
  const changeLayout = () => {
    if (layout === 'list') {
      return 'list';
    } else {
      return 'gallery';
    }
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
  <div className={'videoItem_' + changeLayout()}>
      <YouTube 
        className={'videoItem__iframe_' + changeLayout()}
        videoId={id} 
        opts={opts}/>
    
    <div className={'videoItem__text_' + changeLayout()}>
      <h3 className='videoItem__title'>{title}</h3>
      <p className='videoItem__channel-name'>{channelTitle}</p>
      <p className='videoItem__view-count'>
        {viewCount ? Math.ceil(viewCount / 1000) + ' тыс просмотров' : 'Video blocked'}
      </p>
    </div>
  </div>
  )
};

const mapStateToProps = (state) => ({
  layout: state.appearance.layout
});

export default connect(mapStateToProps)(VideoItem);