import React from 'react';
import './album.css';


export const Album = props => {
  return (
    
  <section className="album-card">
  <img className="cover-image" src={props.albumCover} alt='Album Cover'></img>
  <section className="icons">
  <img className="heart" src="icons/heart.svg" alt="heart"></img>
  <img className="play" src="icons/play.svg" alt="play icon"></img>
  <img className="dots" src="icons/dots.svg" alt="dots"></img>
  </section>
  <h2 className="album-title">{props.albumTitle}</h2>
  <h4 className="artist-name">{props.artistName}</h4>
  </section> 
  )
}