import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    loading: false,
    error: null
};

const charactersSlice = createSlice({
    name: "characters",
    initialState,
})

export default charactersSlice.reducer;

console.log(charactersSlice); 