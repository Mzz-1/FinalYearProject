import axios from "axios";

export const getProducts = async (id) => {
    const productData = await axios.get(
        `http://localhost:5000/api/products/${id}`
    );
    return productData.data.product
};

export const getAllProducts = async () => {
    const productsData = await axios.get(
        `http://localhost:5000/api/products`
    );

    const data = await productsData.data.product;
    return data
};

export const deleteProducts = async (id) => {
    const productData = await axios.delete(
        `http://localhost:5000/api/products/${id}`
    );
   
};
