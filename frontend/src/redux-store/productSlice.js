import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
    "fetch-all-products",
    async ({ searchItem, category, sort, page, limit }) => {
        const apiUri = `http://localhost:5000/api/products?name=${searchItem}&category=${category}&sort=${sort}&page=${page}&limit=${limit}`;
        const response = await axios.get(apiUri);
        return response.data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        fetchStatus: "",
    },
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(fetchAllProducts.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchAllProducts.rejected, (state) => {
                state.fetchStatus = "error";
            });
    },
});

export default productSlice;
