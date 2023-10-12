import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";
import authSilce from "./slices/authSilce";

const store = configureStore({
    reducer: {
        auth: authSilce,
        blog: blogSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
})

export default store