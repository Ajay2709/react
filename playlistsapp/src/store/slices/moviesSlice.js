import { createSlice, nanoid } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        searchText: '',
        list: []
    },
    reducers: {//Add reducers to the slice to change the state values
        addMovie(state, action){
            state.list.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeMovie(state, action){
            console.log("removeMovie called for: ", action.payload);
            const updatedList = state.list.filter((movie) => {
                return movie.id !== action.payload;
            })
            state.list = updatedList;
        },
        changeSearchText(state, action){
            state.searchText = action.payload;
        }
    }/*,
    extraReducers(builder) {
        builder.addCase(reset, () => {return []} )
    }*/
});

//export const { addRandomMovie, removeMovie } = moviesSlice.actions;
export const moviesActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;