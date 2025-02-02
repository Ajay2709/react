import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk('users/delete', async (user) => {
    await axios.delete(`http://localhost:3006/users/${user.id}`);
    return user;
});

export {deleteUser};