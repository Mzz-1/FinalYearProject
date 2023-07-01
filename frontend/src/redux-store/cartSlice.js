import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartProducts = createAsyncThunk(
    "fetch-cart-products",
    async ({ userID }) => {
        const apiUri = `http://localhost:5000/api/cartProducts/${userID}`;
        const response = await axios.get(apiUri);
        return response.data;
    }
);

export const addToCart = createAsyncThunk(
    "add-to-cart",
    async ({ userID, productID, quantity }) => {
        const apiUri = "http://localhost:5000/api/add-to-cart";

        const response = await axios.post(apiUri, {
            userID: userID,
            productID: productID,
            quantity: quantity,
        });
        return response.data;
    }
);

export const removeFromCart = createAsyncThunk(
    "remove-from-cart",
    async ({ userID, productID }) => {
        const apiUri = `http://localhost:5000/api/remove-from-cart/${userID}/${productID}`;
        const response = await axios.get(apiUri);
        return response.data;
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
        fetchStatus: "",
        removeStatus:""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                console.log(state.data, "state.data");
                state.fetchStatus = "success";
            })
            .addCase(fetchCartProducts.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchCartProducts.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.data.products.push(action.payload.product);
                state.fetchStatus = "success";
            })
            .addCase(addToCart.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(addToCart.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                const { productID } = action.meta.arg;
                console.log(productID,"product to remove")
                state.data = state.data.products.filter(
                    (product) => product._id !== productID
                );

                console.log(state.data,"after remove remove")
                state.removeStatus = "success";
            })
            .addCase(removeFromCart.pending, (state) => {
                state.removeStatus = "loading";
            })
            .addCase(removeFromCart.rejected, (state) => {
                state.removeStatus = "error";
            });
    },
});

export default cartSlice;
