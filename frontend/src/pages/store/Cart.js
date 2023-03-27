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
    const [cart, setCart] = useState();

    const getCart = async () => {
        const cartData = await axios.get(
            `http://localhost:5000/api/cart/${user.id}`
        );
        const cart = cartData.data.cart;
        console.log(cart);
        setCart(cart.items);
    };

    useEffect(() => {
        getCart();
    }, []);

    const getProducts = async (id) => {
        const productData = await axios.get(
            `http://localhost:5000/api/cartProducts/${user.id}`
        );
        console.log("details", productData.data.products);
        setProducts(productData.data.products);
    };

    useEffect(() => {
        getProducts();
    }, []);

    const navigate = useNavigate();

    return (
        <div className="bg-[#F4F4F2] px-[5%] pb-[100px]">
            <div className="max-w-[1440px] m-auto flex justify-between items-center">
                <Banner heading="My Cart" />
            </div>

            <div className="flex flex-col justify-center gap-[40px] ">
                <hr className="h-[2px] w-[530px] bg-[#65635F] " />
                <div className="w-[700px]">
                    <ul className=" ">
                        {products?.map((product) => {
                            console.log("product", product);
                            return (
                                <div className="flex text-[#3C3737] w-[530px] text-[18px] gap-[40px] py-[40px] border-y border-black">
                                    <li>
                                        {" "}
                                        <img
                                            src={product.url}
                                            className="h-[200px] shadow-lg"
                                            alt=""
                                        />{" "}
                                    </li>
                                    <div className="flex flex-col gap-[10px] mt-[20px]">
                                        <li className="text-[22px] ">
                                            {product.name}
                                        </li>
                                        <li>Rs {product.price}</li>
                                    </div>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
