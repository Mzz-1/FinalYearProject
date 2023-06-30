import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllEvents = createAsyncThunk("fetch-all-events", async () => {
    const apiUri = `http://localhost:5000/api/events`;
    const response = await axios.get(apiUri);
    return response.data;
});

const eventSlice = createSlice({
    name: "event",
    initialState: {
        data: [],
        fetchStatus: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllEvents.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(fetchAllEvents.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchAllEvents.rejected, (state) => {
                state.fetchStatus = "error";
            });
    },
});

export default eventSlice;
