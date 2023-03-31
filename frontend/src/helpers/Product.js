import axios from "axios";

export const getProducts = async (id) => {
    const productData = await axios.get(
        `http://localhost:5000/api/products/${id}`
    );
    return productData.data.product
};
