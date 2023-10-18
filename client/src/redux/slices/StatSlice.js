import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

const initialState = {
    allUsersCount: 0,
    allBlogsCount: 0,
    allUsers: []
};

export const getStatsData = createAsyncThunk("stats/get", async () => {
    try {
        const response = axiosInstance.get("/admin/stats/users");
        return (await response).data
    } catch (error) {
        alert(error.message)
    }
});

export const getAllRegisteredUsers = createAsyncThunk("/stats/getallusers", async () => {
    try {
        const response = axiosInstance.get("/admin/stats/allusers");
        return (await response).data
    } catch (error) {
        alert(error.message)
    }
})

export const deleteUSer = createAsyncThunk("/stats/deleteuser", async (userId) => {
    try {
        const response = axiosInstance.delete(`/admin/stats/user/delete/${userId}`);
        return (await response).data
    } catch (error) {
        alert(error.message)
    }
})

const statSlice = createSlice({
    name: "state",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStatsData.fulfilled, (state, action) => {
            state.allUsersCount = action?.payload?.allUsersCount;
            state.allBlogsCount = action?.payload?.allBlogsCount
        })
            .addCase(getAllRegisteredUsers.fulfilled, (state, action) => {
                state.allUsers = action?.payload?.allUsers.reverse()
                console.log(action)
            })
    }
})

export default statSlice.reducer;