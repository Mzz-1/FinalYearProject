import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Banner } from "../../components/Banner";
import { ProductList } from "./ProductList";
import { useUser } from "../../service/useUser";

export const Cart = () => {
    const [product, setProducts] = useState([]);

    const user = useUser();

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

    const getProducts = async (id) => {
        const productsData = await axios.get(
            `http://localhost:5000/api/products/${id}`
        );

        const data = await productsData.data.product;
        setProducts(data);
        console.log("getProducts", data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    // const navigate= useNavigate()

    // const getProducts = async (id) =>{
    // const productData = await axios.get(`http://localhost:5000/api/products/${id}`)
    // console.log(productData.data.product)

    // navigate(`/product/${id}`)

    // }

    return (
        <div className="bg-[#F4F4F2] px-[5%] py-[100px]">
            <div className="max-w-[1440px] m-auto flex justify-between items-center">
                <Banner heading="My Cart" />
            </div>

            <div className="flex flex-col justify-center gap-[40px] ">
                <hr className="h-[2px] bg-[#65635F] " />
                <div className="w-[700px]">
                    <ul className="flex text-[#3C3737] w-[530px] text-[18px] gap-[40px] ">
                        {cart.items?.map((item) => {
                            getProducts(item.productID);
                            return (
                                <>
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
                                    <li>Quantity {item.quantity}</li>
                                    
                                    </div>
                                    <li className="mt-[20px] ml-[80px]">Total {cart.total}</li>
                                </>
                            );
                        })}
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};
