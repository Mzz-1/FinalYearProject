import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorToast } from "../helpers/Toast";

export const fetchAllEvents = createAsyncThunk("fetch-all-events", async () => {
    try {
        const apiUri = `http://localhost:5000/api/events`;
        const response = await axios.get(apiUri);
        return response.data;
    } catch {
        ErrorToast("Something went wrong.");
    }
});

export const fetchEvent = createAsyncThunk("fetch-event", async ({ id }) => {
    try {
        const apiUri = `http://localhost:5000/api/events/${id}`;
        const response = await axios.get(apiUri);
        return response.data;
    } catch {
        ErrorToast("Something went wrong.");
    }
});

export const addEvents = createAsyncThunk("add-event", async ({ data }) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("place", data.place);
    formData.append("location", data.location);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("startTime", data.startTime);
    formData.append("endTime", data.endTime);
    formData.append("image", data.image[0]);

    try {
        const apiUri = `http://localhost:5000/api/events`;
        const response = await axios.post(apiUri, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch {
        ErrorToast("Something went wrong.");
    }
});

export const updateEvents = createAsyncThunk(
    "update-event",
    async ({ data, id }) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("place", data.place);
        formData.append("location", data.location);
        formData.append("startDate", data.startDate);
        formData.append("endDate", data.endDate);
        formData.append("startTime", data.startTime);
        formData.append("endTime", data.endTime);
        formData.append("image", data.image[0]);
        try {
            const apiUri = `http://localhost:5000/api/events/${id}`;
            const response = await axios.patch(apiUri, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response.data;
        } catch {
            ErrorToast("Something went wrong.");
        }
    }
);

export const deleteEvent = createAsyncThunk("delete-event", async ({ id }) => {
    try {
        const apiUri = `http://localhost:5000/api/events/${id}`;
        const response = await axios.delete(apiUri);
        return response.data;
    } catch {
        ErrorToast("Something went wrong.");
    }
});

const eventSlice = createSlice({
    name: "event",
    initialState: {
        data: [],
        eventData: {},
        eventUpdateID: "",
        fetchStatus: "",
        addStatus: "",
        updateStatus: "",
        getStatus: "",
        deleteStatus: "",
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
            })
            .addCase(addEvents.fulfilled, (state, action) => {
                state.addStatus = "success";
            })
            .addCase(addEvents.pending, (state) => {
                state.addStatus = "loading";
            })
            .addCase(addEvents.rejected, (state) => {
                state.addStatus = "error";
            })
            .addCase(updateEvents.fulfilled, (state) => {
                state.updateStatus = "success";
            })
            .addCase(updateEvents.pending, (state) => {
                state.updateStatus = "loading";
            })
            .addCase(updateEvents.rejected, (state) => {
                state.updateStatus = "error";
            })
            .addCase(fetchEvent.fulfilled, (state, action) => {
                state.eventData = action.payload;
                state.eventUpdateID = action.payload.event._id;
                console.log();
                state.getStatus = "success";
            })
            .addCase(fetchEvent.pending, (state) => {
                state.getStatus = "loading";
            })
            .addCase(fetchEvent.rejected, (state) => {
                state.getStatus = "error";
            })
            .addCase(deleteEvent.fulfilled, (state) => {
                state.deleteStatus = "success";
            })
            .addCase(deleteEvent.pending, (state) => {
                state.deleteStatus = "loading";
            })
            .addCase(deleteEvent.rejected, (state) => {
                state.deleteStatus = "error";
            });
    },
});

export default eventSlice;
