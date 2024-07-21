import { createSlice } from "@reduxjs/toolkit";
import { moviesActions } from "./moviesSlice";

const movieFormSlice = createSlice({
    name: 'movieForm',
    initialState: {
        name: '',
        cost: 0
    },
    //Add a reducer to the slices in to change the state values
    reducers: {
        changeName(state, action){
            state.name = action.payload
        },
        changeCost(state, action){
            state.cost = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(moviesActions.addMovie, (state,action) => {
            state.name = '';
            state.cost = 0;
        })
    }
});

export const movieFormActions = movieFormSlice.actions;
export const movieFormReducer = movieFormSlice.reducer;