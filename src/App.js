import React from 'react'
import { Album } from './Components/Album';
import data from './data.json'

export const App = () => {
  console.log(data)
  return (
    <div>
     {data.albums.items.map(song => {
        return <Album 
        key={song.id} 
        albumTitle={song.name}
         />
      })}

    </div>


  )
}
