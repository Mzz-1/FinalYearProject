import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorToast } from "../helpers/Toast";

export const fetchExhibition = createAsyncThunk(
    "fetch-all-exhibition",
    async ({ id }) => {
        try {
            const apiUri = `http://localhost:5000/api/exhibitions/${id}`;
            const response = await axios.get(apiUri);
            return response.data;
        } catch (err) {
          console.log(err)
        }
    }
);

export const fetchArtistExhibition = createAsyncThunk(
    "fetch-artist-exhibition",
    async ({ id }) => {
        try {
            const apiUri = `http://localhost:5000/api/artist-exhibitions/${id}`;
            const response = await axios.get(apiUri);
            return response.data;
        } catch (err) {
            ErrorToast("Something went wrong.");
        }
    }
);

export const addExhibition = createAsyncThunk(
    "add-exhibition",
    async ({ data, userID }) => {
        try {
            const formData = new FormData();
            formData.append("userID", userID);
            formData.append("location", data.location);
            formData.append("name", data.name);
            formData.append("startDate", data.startDate);
            formData.append("endDate", data.endDate);
            formData.append("image", data.image[0]);
            const apiUri = "http://localhost:5000/api/add-artist-event";
            const response = await axios.post(apiUri, formData, {
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

export const updateExhibition = createAsyncThunk(
    "update-exhibition",
    async ({ data, userID, eventID }) => {
        try {
            const formData = new FormData();
            formData.append("userID", userID);
            formData.append("location", data.location);
            formData.append("name", data.name);
            formData.append("startDate", data.startDate);
            formData.append("endDate", data.endDate);
            formData.append("image", data.image[0]);
            const apiUri = `http://localhost:5000/api/update-artist-event/${eventID}`;
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

export const deleteExhibition = createAsyncThunk(
    "delete-exhibition",
    async ({ id }) => {
        try {
            const apiUri = `http://localhost:5000/api/artist-exhibitions/${id}`;
            const response = await axios.delete(apiUri);
            return response.data;
        } catch {
            ErrorToast("Something went wrong.");
        }
    }
);

const exhibitionSlice = createSlice({
    name: "exhibition",
    initialState: {
        data: [],
        fetchStatus: "",
        addStatus: "",
        updateStatus: "",
        deleteStatus: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchExhibition.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(fetchExhibition.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchExhibition.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(fetchArtistExhibition.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(fetchArtistExhibition.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchArtistExhibition.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(addExhibition.fulfilled, (state) => {
                state.addStatus = "success";
            })
            .addCase(addExhibition.pending, (state) => {
                state.addStatus = "loading";
            })
            .addCase(addExhibition.rejected, (state) => {
                state.addStatus = "error";
            })
            .addCase(updateExhibition.fulfilled, (state) => {
                state.updateStatus = "success";
            })
            .addCase(updateExhibition.pending, (state) => {
                state.updateStatus = "loading";
            })
            .addCase(updateExhibition.rejected, (state) => {
                state.updateStatus = "error";
            })
            .addCase(deleteExhibition.fulfilled, (state) => {
                state.deleteStatus = "success";
            })
            .addCase(deleteExhibition.pending, (state) => {
                state.deleteStatus = "loading";
            })
            .addCase(deleteExhibition.rejected, (state) => {
                state.deleteStatus = "error";
            });
    },
});

export default exhibitionSlice;
