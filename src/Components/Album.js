import React from 'react';
import './album.css';
import 'index.css';

export const Album = props => {
  return (
    
      <div className="album-card">
       <img src={props.albumCover} alt='Album Cover'></img>
  <h2 className="album-title">{props.albumTitle}</h2>
  <h3 className="artist-name">{props.artistName}</h3>
     </div> 
  )
}