import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import moviesSlice, { addToWatchList, setMovie } from '../moviesSlice';
const BASE_URL = 'https://image.tmdb.org/t/p/original/';
export default function MovieCard({ movie }) {
 let dispatch = useDispatch(moviesSlice)
    return (
        <div className='card'>
            <div className="image-container">
                <img src={BASE_URL + movie.poster_path} alt="" className="poster" />
            </div>
            <h1 className="title">{movie.original_title}</h1>
            <p className="desc">
                {movie.overview.substring(0, 100) + '...'}
            </p>
            <p className="release">{movie.release_date}</p>
            <div className="card-actions">
                <button onClick={()=>dispatch(addToWatchList(movie))} >Add To Watchlist</button>
                <Link to={'/details/' + movie.id}><button onClick={()=>dispatch(setMovie(movie))}>View Details</button></Link>
            </div>
        </div>
    )
}


export { BASE_URL }