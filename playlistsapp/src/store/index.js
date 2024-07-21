import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, songsActions } from './slices/songsSlice';
import { moviesReducer, moviesActions } from './slices/moviesSlice';
import { movieFormReducer, movieFormActions } from './slices/movieFormSlice';
//import { addRandomMovie, removeMovie } from './slices/moviesSlice';
//import { addSong, removeSong } from './slices/songsSlice';


const store = configureStore({
    reducer: {
        songs: songsReducer, // This reducer property is a wrapper of the reducers mentioned in slice creation
        movies: moviesReducer,
        movieForm: movieFormReducer
    }
});


export const { addMovie, removeMovie, changeSearchText } = moviesActions;
export const { changeName, changeCost } = movieFormActions;
export const { addSong, removeSong } = songsActions;
//export { addSong, removeSong, addRandomMovie, removeMovie }
export default store;
