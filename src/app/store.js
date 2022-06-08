import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/characters/charactersSlice";
import singleCharacterReducer from "../features/singleCharacter/singleCharacterSlice";
import quotesReducer from "../features/quotes/quotesSlice";

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        singleCharacter: singleCharacterReducer,
        quotes: quotesReducer
    }
});