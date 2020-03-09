import React from 'react'
import { Album } from './Components/Album';
import data from './data.json'
import 'index.css';

export const App = () => {
 
  return (
    <main className="main-title"><h1>New albums & singles</h1>
      <article class="album-container">
        {data.albums.items.map(item => {
          return <Album
            key={item.id}
            albumCover={item.images[1].url}
            albumTitle={item.name}
            artistName={item.artists[0].name}
          />
        })}
      </article>
    </main>

  )
}
