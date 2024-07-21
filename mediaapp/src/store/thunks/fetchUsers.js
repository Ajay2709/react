import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** Creating an Async Thunk
 * 1. Create a new file for the thunk
 * 2. Create the thunk and give it a base type that describes the purpose of the request
 * 3. In the thunk, make the request, return the data that is needed in the reducer
 * 4. In the slice, add extraReducers, watching for the action types made by the thunk
 * 5. Export the thunk from the store/index.js file
 * 6. For every user action, dispatch the requried thunk function to run it
 */

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get("http://localhost:3006/users");
    return response.data;
});

console.log(fetchUsers);

export { fetchUsers };
 