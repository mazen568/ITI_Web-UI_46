import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./slices/langSlice"
import authReducer from "./slices/authSlice"
import postsReducer from "./slices/postsSlice"
import themeReducer from "./slices/themeSlice"

const store = configureStore({
    reducer: {
        langReducer,
        authReducer,
        postsReducer,
        themeReducer,
    }
})


export default store;