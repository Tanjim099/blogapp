import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./slices/blogSlice";
import authSilce from "./slices/authSilce";
import StatSlice from "./slices/StatSlice";

const store = configureStore({
    reducer: {
        auth: authSilce,
        blog: blogSlice,
        stat: StatSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
})

export default store