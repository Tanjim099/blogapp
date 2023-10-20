import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../config/axiosInstance"
import toast from "react-hot-toast";
// import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") !== undefined ? JSON.parse(localStorage.getItem("data")) : {},
    blogs: []
}

export const createAccount = createAsyncThunk("/auth/register", async (data) => {
    try {
        const response = axiosInstance.post("user/register", data)
        return (await response).data;
    } catch (error) {
        // toast.error(error?.response?.data?.message)
        console.log(error?.response?.data?.message);
    }
})


export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const response = axiosInstance.post("user/login", data, {
            withCredentials: true,
        })
        // const response = await fetch("http://localhost:8000/api/v1/user/login", {
        //     method: "POST",
        //     mode: "cors",
        //     credentials: "include",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })

        return await response
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
})

export const loguot = createAsyncThunk("/auth/loguot", async () => {
    try {
        const response = axiosInstance.get("/user/loguot")
        return await response;
    } catch (error) {
        console.log(error?.response?.data?.message);
    }
})

export const getProfile = createAsyncThunk("user/details", async () => {
    try {
        const response = axiosInstance.get("/user/me")
        return (await response).data
    } catch (error) {
        console.log(error?.response?.data?.message);
    }

})

export const getBlogs = createAsyncThunk("user/blogs", async (userId) => {
    console.log(userId)
    try {
        const response = axiosInstance.get(`user/${userId}/blogs`);
        return (await response).data
    } catch (error) {
        // alert(error?.response?.data?.message)
        // console.log(error?.response?.data?.message);
        toast.error(error?.response?.data?.message)
    }
})
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem("data", JSON.stringify(action?.payload?.data))
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.data?.user?.role)
                state.isLoggedIn = true;
                state.data.user = action?.payload?.data?.user;
                state.role = action?.payload?.data?.user?.role;
            })
            .addCase(loguot.fulfilled, (state) => {
                localStorage.clear();
                state.isLoggedIn = false;
                state.role = "";
                state.data = {}
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                if (!action?.payload?.data) return
                localStorage.setItem("data", JSON.stringify(action?.payload?.data));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.data?.user?.role);
                state.isLoggedIn = true;
                console.log(action.payload)
                state.data = action?.payload.user;
                state.role = action?.payload?.data?.user?.role;

            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.blogs = action?.payload?.blogs
                console.log(state.blogs)
            })
    }
})

export default authSlice.reducer