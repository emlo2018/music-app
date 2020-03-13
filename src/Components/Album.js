import React from 'react';
import './album.css';

export const Album = props => {
  return (
    
  <section className="album-card">
   <section className="cover">
    <img className="cover-image" src={props.albumCover} alt='Album Cover'></img>
     <section className="icons">
      <img className="heart" src="icons/heart.svg" alt="heart"></img>
      <img className="play" src="icons/play.svg" alt="play icon"></img>
      <img className="dots" src="icons/dots.svg" alt="dots"></img>
     </section>
   </section>
  <a className="album-title" href={props.link}><h2>{props.albumTitle}</h2></a>
  <a href={props.artistLink}><h4 className="artist-title">{props.artistName}</h4></a>
  </section> 
  )
}