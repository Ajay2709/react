import { createSlice } from "@reduxjs/toolkit";
import reset from "../actions";

/** Changing state using Redux
 * 1. Add a reducer to the slices in to change the state values
 * 2. Export the action creator that the slice automatically creates
 * 3. Find the component that should be dispatched from
 * 4. Import the action creator function and 'useDispatch' from react-redux
 * 5. Call the useDispatch hook to access the dispatch function
 * 6. When the user does something, call the action creator to get an action, then dispatch it
 */
const songsSlice = createSlice({
    name: 'songs',
    initialState: [],
    //Add a reducer to the slices in to change the state values
    reducers: {
        addSong(state, action){
            console.log("in addSong");
            state.push(action.payload);
        },
        removeSong(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state,action) => {
            //state = []; // This doesn't work, since the state is assigned a new object and the original state is not actually modified
            //state.splice(0,state.length); // This works since the original state object is modified.
            return []; //This works too
        })
    }
});

//export const { addSong, removeSong } = songsSlice.actions;
export const songsActions = songsSlice.actions;
export const songsReducer = songsSlice.reducer;

// Here, addSong is an action creator, that is automatically created when each reducer in the Slice.
//It returns an actoin object with type and payload fields eg: {type: 'songs/addSong', payload: songName}
console.log(songsSlice.actions)
console.log(songsSlice.actions.addSong) 
console.log(songsSlice.actions.addSong())