import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../config/axiosInstance"

const initialState = {
    blogList: []
}

export const getAllBlog = createAsyncThunk("/blog/getAllBlog", async () => {
    const response = await axiosInstance.get("/blog");
    return response.data
})

export const createBlog = createAsyncThunk("/blog/create", async (data) => {
    try {
        const response = await axiosInstance.post("/blog", data)
        console.log(response.data)
        return response.data
        // return (await response).data
    } catch (error) {
        console.log(error.message)
    }
})

export const deleteBlog = createAsyncThunk("/blog/delete", async (blogId) => {
    try {
        const response = axiosInstance.delete(`/blog/delete/${blogId}`);
        console.log(response.data)
        return (await response).data
    } catch (error) {
        console.log(error.message)
    }
})

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBlog.fulfilled, (state, action) => {
            state.blogList = action.payload.getAllBlog.reverse()
        })
    }
})

export default blogSlice.reducer;