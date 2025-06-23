import React from 'react'
const movies = [
    {
        id:1,
        title:'iron man'
    },
    {
        id:2,
        title:'spiderman'
    },
    {
        id:3,
        title:'black-panther'
    }
]
const MovieKey = () => {
  return (
    <div>
      {movies.map((movie)=>{
        return <h1 key={movie.id}>{movie.title}</h1>
      })}
    </div>
  )
}

export default MovieKey
