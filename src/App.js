import React from 'react'
import { Album } from './Components/Album';
import data from './data.json'

export const App = () => {
  console.log(data)
  return (
    <div class="album-title">
     {data.albums.items.map(item => {
        return <Album 
        key={item.id} 
        albumTitle={item.name}
         />
      })}

    </div>

  )
}
