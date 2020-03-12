import React from 'react'
import { Album } from './Components/Album';
import data from './data.json'

export const App = () => {
 
  return (
    <section className="main-title">
      <h1>New albums & singles</h1>

      <article className="album-container">
        {data.albums.items.map(item => {
          return <Album
            key={item.id}
            albumCover={item.images[1].url}
            link={item.external_urls.spotify}
            albumTitle={item.name}
            artistLink={item.artists[0].external_urls.spotify}
            artistName={item.artists[0].name}
          />
        })}
      </article>
    </section>

  )
}
