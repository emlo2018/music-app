import React from 'react';
import './album.css';

export const Album = props => {
  return (
    
  <section className="album-card">
   <section className="cover-image">
    <img src={props.albumCover} alt='Album Cover'></img>
     <section className="icons">
      <img className="heart" src="icons/heart.svg" alt="heart"></img>
      <img className="play" src="icons/play.svg" alt="play icon"></img>
      <img className="dots" src="icons/dots.svg" alt="dots"></img>
     </section>
   </section>
  <h2 className="album-title"><a href={props.link}>{props.albumTitle}</a></h2>
  <h4 className="artist-name"><a href={props.artistLink}>{props.artistName}</a></h4>
  </section> 
  )
}