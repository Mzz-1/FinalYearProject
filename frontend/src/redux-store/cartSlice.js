import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartProducts = createAsyncThunk("fetch-cart-products", async ({ userID }) => {
    const apiUri = `http://localhost:5000/api/cartProducts/${userID}`;
    const response = await axios.get(apiUri);
    return response.data;
});

export const addToCart = createAsyncThunk("add-to-cart", async ({ userID,productID,quantity}) => {
    const apiUri = "http://localhost:5000/api/add-to-cart"
    
    const response = await axios.post(apiUri,{
        userID: userID,
        productID: productID,
        quantity: quantity,
    });
    return response.data;
});

export const removeFromCart = createAsyncThunk("remove-from-cart", async ({ userID,productID }) => {
    const apiUri = `http://localhost:5000/api/remove-from-cart/${userID}/${productID}`;
    const response = await axios.get(apiUri);
    return response.data;
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        fetchStatus: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(fetchCartProducts.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchCartProducts.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                
                state.fetchStatus = "success";
            })
            .addCase(addToCart.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(addToCart.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(removeFromCart.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(removeFromCart.rejected, (state) => {
                state.fetchStatus = "error";
            });
    },
});

export default cartSlice;
