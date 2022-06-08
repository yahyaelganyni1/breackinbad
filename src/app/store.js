import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/characters/charactersSlice";
import singleCharacterReducer from "../features/singleCharacter/singleCharacterSlice";
import episodesReducer from "../features/episodes/episodeSlice";

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        singleCharacter: singleCharacterReducer,
        episodes: episodesReducer,
    }
});