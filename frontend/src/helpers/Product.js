import axios from "axios";

export const getProducts = async (id) => {
    const productData = await axios.get(
        `http://localhost:5000/api/products/${id}`
    );
    return productData.data.product;
};

export const getAllProducts = async () => {
    const productsData = await axios.get(`http://localhost:5000/api/products`);

    const data = await productsData.data.product;
    return data;
};

export const deleteProducts = async (id) => {
    const productData = await axios.delete(
        `http://localhost:5000/api/products/${id}`
    );
};

export const addProduct = async (data, artistName) => {
    
    const formData = new FormData();
    console.log("artistname",artistName)
    formData.append("name", data.name);
    formData.append("artist", artistName);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);
    formData.append("dimensions", `${data.length} X ${data.breadth} in`);
    formData.append("image", data.image[0]);

    try {
        const response = await axios.post(
            "http://localhost:5000/api/products",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        console.log(response.data);
        // const { token } = response.data;
        // console.log(token);
    } catch (err) {
        console.log(`err:${err}`);
    }
};

export const updateProduct = async (data, artistName, userID) => {
    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("artist", artistName);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity);
    formData.append("price", data.price);
    formData.append("dimensions", `${data.length} X ${data.breadth} in`);
    formData.append("image", data.image[0]);

    try {
        const response = await axios.patch(
            `http://localhost:5000/api/products/${userID}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        console.log(response.data);
        // const { token } = response.data;
        // console.log(token);
    } catch (err) {
        console.log(`err:${err}`);
    }
};
