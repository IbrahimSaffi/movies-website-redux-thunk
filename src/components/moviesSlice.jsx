import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=9b153f4e40437e115298166e6c1b997c';

export const getMovies = createAsyncThunk(
    "movies / getMovies",
    async (arg,{getState}) => {
        let state=getState().moviesSlice
        const data = await fetch(API_URL+`&page=${state.currPage}`)
        return data.json()
    }
)
const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState: {
        watchlist: JSON.parse(localStorage.getItem("watchlist")) === null ? [] : JSON.parse(localStorage.getItem("watchlist")),
        movies: [],
        currPage:1,
        loading: "pending",
        error:null,
        movie:null
    },
    reducers: {
        addToWatchList: (state, action) => {
            if (state.watchlist.every(ele => ele.id !== action.payload.id)) {
                state.watchlist.push(action.payload)
                localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
            }
        },
        nextPage : (state,action)=>{
          state.currPage+=1
        },
        setMovie :(state,action)=>{
            state.movie = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state, action) => {
             state.loading = "pending"

        })
        builder.addCase(getMovies.rejected, (state, action) => {
            state.loading =""
            state.error = action.payload
        })
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.loading=""
             state.movies= action.payload.results
        })
    }
}
);
export default moviesSlice.reducer
export const { addToWatchList,nextPage,setMovie } = moviesSlice.actions