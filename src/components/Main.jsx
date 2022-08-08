import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import Details from './Details';
import Layout from './Layout'
import MovieList from './MovieList';
import moviesSlice, { getMovies } from './moviesSlice';
import Watchlist from './Watchlist';
export default function Main() {

  let dispatch = useDispatch(moviesSlice)
  let state = useSelector(state=>state.moviesSlice)
  useEffect(() => {
     dispatch(getMovies())
  }, [state.currPage])

  return (
    <div className='main-container'>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<MovieList/>} />
            <Route path='watchlist' element={<Watchlist/>} />
            <Route path='details/:id' element={<Details/>} />
          </Route>
        </Routes>
    </div>
  )
}
