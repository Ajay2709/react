import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../store/thunks/fetchUsers";
import { addUser } from "../store/thunks/addUser";
import { deleteUser } from "../store/thunks/deleteUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers(builder){
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.list = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(addUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.list.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.list = state.list.filter((user) => {
                return user.id !== action.payload.id
            });
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }

})

export const usersReducer = usersSlice.reducer;