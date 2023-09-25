import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";

const store = configureStore({
    reducer: {
        blog: blogSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
})

export default store