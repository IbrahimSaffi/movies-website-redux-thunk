import React, { useEffect, useState } from 'react'
import MovieCard from './ui/MovieCard';
import { useSelector,useDispatch } from 'react-redux';
import moviesSlice, { nextPage } from './moviesSlice';

export default function MovieList() {
  let {movies,loading} = useSelector(state=>state.moviesSlice)
  let dispatch = useDispatch(moviesSlice)

  return (
    <div style={{display:"flex",flexDirection:"column"}} >
    <div className='list-container'>
      { loading==="pending"? (<h1>Loading...</h1>) : movies.map((movie) => <MovieCard movie={movie} />)}
    </div >
      <button style={{alignSelf:"center",marginBottom:"10px",display:loading===""?"flex":"none"}} onClick={()=>dispatch(nextPage())} > Next Page</button>

    </div>
  )
}
