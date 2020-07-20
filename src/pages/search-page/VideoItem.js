import React from 'react';

const VideoItem = ( { url, title, channelTitle }) => {
  return (
  <div>
    <img src={url}></img>
    <h3>{title}</h3>
    <p>{channelTitle}</p>
    <p>75 000</p>
  </div>
  )
};

export default VideoItem;