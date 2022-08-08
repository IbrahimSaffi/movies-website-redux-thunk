import React, { useState } from 'react'
import MainSlice, { addToWatchList } from './moviesSlice';
import { BASE_URL } from './ui/MovieCard';
import { useDispatch,useSelector } from 'react-redux';


export default function Details() {
   
    let {movie} = useSelector(state=>state.moviesSlice)
    let dispatch = useDispatch(MainSlice)
    return (
        <div className='details-container'>
            {
                <>
                    <div className="left">
                        <img src={BASE_URL + movie.poster_path} alt={movie.title} className="movie-poster" />
                    </div>
                    <div className="right">
                        <h1 className="title">{movie.original_title}</h1>
                        <p className="desc">{movie.overview}</p>
                        <p className="release-date">Release Date: {movie.release_date}</p>
                        <button onClick={()=>dispatch(addToWatchList(movie))} >Add to Watchlist</button>
                    </div>
                </>
            }
        </div>
    )
}
