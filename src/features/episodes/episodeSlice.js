import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    episode: {},
    loading: false,
};

const url = "https://breakingbadapi.com/api/episodes";

export const getEpisode = createAsyncThunk("episode/getEpisode", async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
});


const episodeSlice = createSlice({
    name: "episode",
    initialState,
    extraReducers: {
        [getEpisode.pending]: (state) => {
            state.loading = true;
        },
        [getEpisode.fulfilled]: (state, action) => {
            state.episode = action.payload;
            state.loading = false;
        }
    }
});


export default episodeSlice.reducer;
