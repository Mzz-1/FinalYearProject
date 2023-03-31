import axios from "axios";

export const getCart = async (id) => {
    const cartData = await axios.get(
      `http://localhost:5000/api/cart/${id}`
    );
    const cart = cartData.data.cart;
    return cart
  };