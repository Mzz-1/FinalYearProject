import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ErrorToast } from "../helpers/Toast";

export const fetchAllProducts = createAsyncThunk(
    "fetch-all-products",
    async ({ searchItem, category, sort, page, limit }) => {
        try{
        const apiUri = `http://localhost:5000/api/products?name=${searchItem}&category=${category}&sort=${sort}&page=${page}&limit=${limit}`;
        const response = await axios.get(apiUri);
        return response.data;
        }catch{
            ErrorToast("Something went wrong")
        }
    }
);

export const loadProducts = createAsyncThunk(
    "load-products",
    async ({ searchItem, category, sort, page, limit }) => {
        try{
        const apiUri = `http://localhost:5000/api/products?name=${searchItem}&category=${category}&sort=${sort}&page=${page}&limit=${limit}`;
        const response = await axios.get(apiUri);
        return response.data;
        }catch{
            ErrorToast("Something went wrong")
        }
    }
);

export const addProducts = createAsyncThunk(
    "add-product",
    async ({ data, artistName }) => {
        try{
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("artist", artistName);
        formData.append("category", data.category);
        formData.append("description", data.description);
        formData.append("quantity", data.quantity);
        formData.append("price", data.price);
        formData.append("dimensions", `${data.length} X ${data.breadth} in`);
        console.log(data.image[0], "ima");
        console.log(data, "dat");
        formData.append("image", data.image[0]);
        const apiUri = "http://localhost:5000/api/products";
        const response = await axios.post(apiUri, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    }catch{
        ErrorToast("Something went wrong")
    }
    }
);

export const updateProducts = createAsyncThunk(
    "update-product",
    async ({ data, artistName, productEditID }) => {
        try{
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("artist", artistName);
        formData.append("category", data.category);
        formData.append("description", data.description);
        formData.append("quantity", data.quantity);
        formData.append("price", data.price);
        formData.append("dimensions", `${data.length} X ${data.breadth} in`);
        formData.append("image", data.image[0]);

        const apiUri = `http://localhost:5000/api/products/${productEditID}`;
        const response = await axios.patch(apiUri, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
      
        return response.data;
    }catch{
        ErrorToast("Something went wrong.")
    }
    }
);

export const getProduct = createAsyncThunk("get-product", async ({ id }) => {
    try{
    const apiUri = `http://localhost:5000/api/products/${id}`;
    const response = await axios.get(apiUri);
    return response.data;
    }catch{
        ErrorToast("Something went wrong.")
    }
});

export const deleteProduct = createAsyncThunk(
    "delete-product",
    async ({ id }) => {
        try{
        const apiUri = `http://localhost:5000/api/products/${id}`;
        const response = await axios.delete(apiUri);
        return response.data;
        }catch{
            ErrorToast("Something went wrong")
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        productData: {},
        totalProducts:0,
        fetchStatus: "",
        addStatus: "",
        getStatus: "",
        deleteStatus: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.totalProducts = state.data.product.length
                state.fetchStatus = "success";
            })
            .addCase(fetchAllProducts.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(fetchAllProducts.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(loadProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.fetchStatus = "success";
            })
            .addCase(loadProducts.pending, (state) => {
                state.fetchStatus = "loading";
            })
            .addCase(loadProducts.rejected, (state) => {
                state.fetchStatus = "error";
            })
            .addCase(addProducts.fulfilled, (state, action) => {
                state.addStatus = "success";
            })
            .addCase(addProducts.pending, (state) => {
                state.addStatus = "loading";
            })
            .addCase(addProducts.rejected, (state) => {
                state.addStatus = "error";
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.productData = action.payload;
                state.getStatus = "success";
            })
            .addCase(getProduct.pending, (state) => {
                state.getStatus = "loading";
            })
            .addCase(getProduct.rejected, (state) => {
                state.getStatus = "error";
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.deleteStatus = "success";
            })
            .addCase(deleteProduct.pending, (state) => {
                state.deleteStatus = "loading";
            })
            .addCase(deleteProduct.rejected, (state) => {
                state.deleteStatus = "error";
            });
    },
});

export default productSlice;
