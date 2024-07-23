import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk
const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
});

export default fetchData;