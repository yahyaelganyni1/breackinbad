import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    quotes: [],
    loading: false,
}
const url = "https://breakingbadapi.com/api/quotes";

export const getQuotes = createAsyncThunk("quotes/getQuotes", async () => {
    const response = await axios.get(url);
    return response.data;
});


const quotesSlice = createSlice({
    name: "quotes",
    initialState,
    extraReducers: {
        [getQuotes.pending]: (state) => {
            state.loading = true;
        },
        [getQuotes.fulfilled]: (state, action) => {
            state.quotes = action.payload;
            state.loading = false;
        }
    }
});


export default quotesSlice.reducer;