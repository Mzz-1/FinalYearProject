import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorToast } from "../helpers/Toast";



export const fetchArtistBio = createAsyncThunk(
    "fetch-artist-bio",
    async ({ id }) => {
        try {
            const apiUri = `http://localhost:5000/api/biography/${id}`;
            const response = await axios.get(apiUri);
            return response.data;
        } catch(err) {
          console.log(err,"rrr")
        }
    }
);

export const addArtistBio = createAsyncThunk(
    "add-artist-bio",
    async ({ data, userID }) => {
        const formData = new FormData();
        formData.append("userID", userID);
        formData.append("name", data.name);
        formData.append("aboutContent", data.aboutContent);
        formData.append("biography", data.biography);
        formData.append("image", data.image[0]);

        try {
            const apiUri = `http://localhost:5000/api/biography`;
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

export const updateArtistBio = createAsyncThunk(
    "update-artist-bio",
    async ({ data, userID }) => {
        const formData = new FormData();
        formData.append("userID", userID);
        formData.append("name", data.name);
        formData.append("aboutContent", data.aboutContent);
        formData.append("biography", data.biography);
        formData.append("image", data.image[0]);

        try {
            const apiUri = `http://localhost:5000/api/biography/${userID}`;
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

const artistBioSlice = createSlice({
    name: "artistBio",
    initialState: {
        data: [],
        fetchStatus: "",
        addStatus:"",
        updateStatus:"",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtistBio.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(fetchArtistBio.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchArtistBio.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(addArtistBio.fulfilled, (state) => {
                state.addStatus = "success";
            })
            .addCase(addArtistBio.pending, (state) => {
                state.addStatus = "loading";
            })
            .addCase(addArtistBio.rejected, (state) => {
                state.addStatus = "error";
            })
            .addCase(updateArtistBio.fulfilled, (state) => {
                state.updateStatus = "success";
            })
            .addCase(updateArtistBio.pending, (state) => {
                state.updateStatus = "loading";
            })
            .addCase(updateArtistBio.rejected, (state) => {
                state.updateStatus = "error";
            });
    },
});

export default artistBioSlice;
