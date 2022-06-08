import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    singleCharacter: {},
    loading: false,
};

const url = "https://breakingbadapi.com/api/characters";

export const getSingleCharacter = createAsyncThunk("singleCharacter/getSingleCharacter", async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
});

const singleCharacterSlice = createSlice({
    name: "singleCharacter",
    initialState,
    extraReducers: {
        [getSingleCharacter.pending]: (state) => {
            state.loading = true;
        },
        [getSingleCharacter.fulfilled]: (state, action) => {
            state.singleCharacter = action.payload;
            state.loading = false;
        }
    }

});

export default singleCharacterSlice.reducer;