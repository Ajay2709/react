import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/* 
1. Define the async thunk
2. Create the Slice with Async Thunk. - dataSlice.js
3. Configure the Store - store.js
4. Provide the Store to Your Application - index.js
5. Use the Async Thunk in a Component - DataList.js
6. Use the Connected Component in App - App.js
*/

const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
});

export default fetchData;