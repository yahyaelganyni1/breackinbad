import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    characters: [],
    loading: false,
    error: null
};

const url = "https://breakingbadapi.com/api/characters";

export const getCharacters = createAsyncThunk("characters/getCharacters", async () => {
    const response = await axios.get(url);
    return response.data;
});



const charactersSlice = createSlice({
    name: "characters",
    initialState,
    extraReducers: {
        [getCharacters.pending]: (state) => {
            state.loading = true;
        },
        [getCharacters.fulfilled]: (state, action) => {
            state.characters = action.payload;
            state.loading = false;
        },
        [getCharacters.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }

});



export default charactersSlice.reducer;

