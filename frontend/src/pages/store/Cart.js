import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Banner } from "../../components/Banner";
import { ProductList } from "./ProductList";
import { useUser } from "../../service/useUser";
import { InfoToast, SuccessToast } from "../../helpers/Toast";
import { Heading, Heading2 } from "../../components/Heading";
import { AiTwotoneDelete } from "react-icons/ai";

export const Cart = () => {
    const [products, setProducts] = useState([]);
    const user = useUser();
    const [cart, setCart] = useState();
    const [subTotal, setSubTotal] = useState(0);

    const navigate = useNavigate();

    const getCart = async () => {
        try {
            const cartData = await axios.get(
                `http://localhost:5000/api/cart/${user.id}`
            );
            const cart = cartData.data.cart;
            console.log(cart);
            setCart(cart);
        } catch (err) {}
    };

    if (!user) {
        
    }

    useEffect(() => {
        getCart();
    }, []);

    const getProducts = async (id) => {
        try {
            const productData = await axios.get(
                `http://localhost:5000/api/cartProducts/${user.id}`
            );
            console.log("details", productData.data.products);
            setProducts(productData.data.products);
            calculateTotal();
        } catch (err) {
            console.log(err);
        }
    };

    const removeFromCart = async (productID) => {
        try {
            const product = await axios.post(
                `http://localhost:5000/api/remove-from-cart/${user.id}/${productID}`
            );
            console.log("details", product.data);
            getProducts();
            SuccessToast("Product has been removed from cart");
            calculateTotal();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const calculateTotal = () => {
        if (cart?.items && products) {
            let total = 0;
            for (let i = 0; i < cart.items.length; i++) {
                const item = cart.items[i];
                const product = products.find((p) => p._id === item.productID);
                if (product) {
                    total += item.quantity * product.price;
                }
            }
            setSubTotal(total);
        }
    };

    useEffect(() => {
        calculateTotal();
    }, [cart, products]);

    return (
        <div className="bg-gray-100 min-h-screen px-[50px]">
            <div className="text-center py-[40px]">
                <h2 className="text-5xl font-light text-[#9F7E7E]">My Cart</h2>
            </div>
            {products.length === 0 ? (
                <span className="flex justify-center text-5xl text-[#9F7E7E]">
                    Your Cart Is Currently Empty.
                </span>
            ) : (
                <div className="">
                    <table className="bg-white  border-gray-300 w-[100%] rounded-md shadow-sm">
                        <thead className="text-left text-[#9F7E7E]">
                            <tr className=" ">
                                <th className=" text-center text-lg font-semibold">
                                    SN
                                </th>
                                <th className=" text-lg font-semibold">
                                    Product
                                </th>
                                <th className="text-center  text-lg font-semibold">
                                    Quantity
                                </th>
                                <th className="text-center  text-lg font-semibold">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, i) => {
                                console.log("product", product);

                                const item = cart.items.find(
                                    (item) => item.productID === product._id
                                );

                                return (
                                    <tr
                                        key={product._id}
                                        className=" py-9 border-b-2 first:border-t-2"
                                    >
                                        <td className="text-center">{i + 1}</td>
                                        <td>
                                            <div className=" py-8 flex flex-col md:flex-row gap-4 md:items-center">
                                                <img
                                                    src={product.url}
                                                    className="h-24 w-24 object-cover"
                                                    alt=""
                                                />
                                                <div>
                                                    <p className="text-lg font-semibold">
                                                        {product.name}
                                                    </p>
                                                    <p className="text-gray-500">
                                                        Rs {product.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <span className="text-lg font-semibold">
                                                {item.quantity}
                                            </span>
                                        </td>

                                        <td className="text-center">
                                            <p className="text-gray-500">
                                                Rs{" "}
                                                {item.quantity * product.price}
                                            </p>
                                        </td>
                                        <td>
                                            <span
                                                className="cursor-pointer"
                                                onClick={() =>
                                                    removeFromCart(
                                                        item.productID
                                                    )
                                                }
                                            >
                                                <AiTwotoneDelete />
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="">
                        <p className="text-lg font-semibold mt-4 text-[#9F7E7E]">
                            Subtotal: {subTotal}
                        </p>

                        <div className="flex items-center justify-between py-4">
                            <button
                                onClick={() =>
                                    navigate(`/checkout/${cart._id}`)
                                }
                                className="bg-[#9F7E7E] text-white border border-gray-300 px-4 py-2 rounded-md shadow-smfocus:outline-none"
                            >
                                Continue to delivery
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
