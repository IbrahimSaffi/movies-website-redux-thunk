import React from 'react'
import MovieCard from './ui/MovieCard'
import { useSelector } from 'react-redux';

export default function Watchlist() {
   let {watchlist} = useSelector(state=>state.moviesSlice)
    return (
        <div className='list-container'>
            {watchlist.length === 0 && <h1>No movies to watch yet...</h1>}
            {watchlist.map(movie => <MovieCard movie={movie} />)}
        </div>
    )
}
