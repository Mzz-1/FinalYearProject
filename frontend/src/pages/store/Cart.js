import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Banner } from "../../components/Banner";
import { ProductList } from "./ProductList";
import { useUser } from "../../service/useUser";

export const Cart = () => {
    const [products, setProducts] = useState([]);

    const user = useUser();

    // const getProducts = async () => {
    //     const productsData = await axios.get(
    //         `http://localhost:5000/api/products/:id`
    //     );

    //     const data = await productsData.data.product;
    //     setProducts(data);
    //     console.log("getProducts", data);
    // };

    // useEffect(() => {
    //     getProducts();
    // }, []);

    const [cart, setCart] = useState([]);

    const getCart = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/cart/${user.id}`
        );

        const data = await productsData.data.cart;
        setCart(data);
        console.log("cart", data);
    };

    useEffect(() => {
        getCart();
    }, []);

    // const navigate= useNavigate()

    // const getProducts = async (id) =>{
    // const productData = await axios.get(`http://localhost:5000/api/products/${id}`)
    // console.log(productData.data.product)

    // navigate(`/product/${id}`)

    // }

    return (
        <div className="bg-[#F4F4F2] px-[5%]">
            <div className="max-w-[1440px] m-auto flex justify-between items-center">
                <Banner heading="My Cart" />
            </div>

            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] m-auto">
                <hr className="h-[2px] bg-[#65635F] " />
                <div>
                    <ul>
                        <li>{cart.total}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
