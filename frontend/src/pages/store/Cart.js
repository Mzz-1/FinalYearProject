import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect,useRef } from "react";
import { useUser } from "../../service/useUser";
import { InfoToast, SuccessToast } from "../../helpers/Toast";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCartProducts,
    removeFromCart,
    cTotal,
} from "../../redux-store/cartSlice";
import { Loader } from "../../components/LoaderWrapper";
import cartSlice from "../../redux-store/cartSlice";
import "../../styles/table.css"

export const Cart = () => {
    useEffect(() => {
        document.title = 'Your Cart'; 
      }, []);
    const user = useUser();
    const [cart, setCart] = useState();
    const [subTotal, setSubTotal] = useState(0);
    const isToastShownRef = useRef(false);

    const dispatch = useDispatch();

    const cartProducts = useSelector((state) => state.cart);

    const { fetchStatus, data, removeStatus } = cartProducts;

    const navigate = useNavigate();

    const getCart = async () => {
        try {
            if (user) {
                const cartData = await axios.get(
                    `http://localhost:5000/api/cart/${user.id}`
                );
                const cart = cartData.data.cart;

                setCart(cart);
            } else {
                // Handle the case when user.id is undefined or falsy
                // For example, show an error message or redirect the user
            }
        } catch (err) {
            // Handle any errors that occur during the API request
        }
    };
    useEffect(() => {
        if (!user && !isToastShownRef.current) {
            InfoToast("Please log in to use the cart.");
            isToastShownRef.current = true; // Update the ref value
        }
    }, [user]);

    const getProducts = () => {
        const userID = user?.id;
        dispatch(fetchCartProducts({ userID }));
    };

    const removeProductFromCart = (productID) => {
        const userID = user?.id;
        dispatch(removeFromCart({ userID, productID }));
        SuccessToast("Product has been removed from cart");
        calculateTotal();
    };

    useEffect(() => {
        if (user) {
            getCart();
            getProducts();
        }
    }, [user, dispatch, removeStatus]);
    const calculateTotal = () => {
        if (cart?.items && data?.products) {
            let total = 0;
            for (let i = 0; i < cart.items.length; i++) {
                const item = cart.items[i];
                const product = data.products.find(
                    (p) => p._id === item.productID
                );
                if (product) {
                    total += item.quantity * product.price;
                }
            }
            setSubTotal(total);
        }
    };

    useEffect(() => {
        calculateTotal();
    }, [cart, data.products]);
    return (
        <div className="bg-gray-100 min-h-screen px-4 md:px-[50px] font-slab">
            <div className="text-center  py-[40px]">
                <h2 className="text-5xl font-light text-[#69696b]">My Cart</h2>
            </div>
            {fetchStatus !== "success" ? (
                <Loader />
            ) : (
                <>
                    {data?.products.length > 0 ? (
                        <div className="">
                            <table className="md:bg-white  md:border-gray-300 w-[100%] rounded-md shadow-sm">
                                <thead className="text-left text-[#3E3E42]">
                                    <tr className="hidden md:table-row">
                                        <th className=" text-center text-lg font-semibold ">
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
                                    {fetchStatus !== "success" ? (
                                        <Loader />
                                    ) : (
                                        <>
                                            {data.products?.map(
                                                (product, i) => {
                                                    const item =
                                                        cart?.items.find(
                                                            (item) =>
                                                                item.productID ===
                                                                product._id
                                                        );

                                                    return (
                                                        <tr
                                                            key={product._id}
                                                            className=" py-9 border-b-2 first:border-t-2"
                                                        >
                                                            <td className="text-center hidden md:table-cell">
                                                                {i + 1}
                                                            </td>
                                                            <td>
                                                                <div className=" md:py-8 flex flex-col md:flex-row gap-4 md:items-center">
                                                                    <img
                                                                        src={
                                                                            product.url
                                                                        }
                                                                        className="md:h-24 md:w-24 w-[150px] h-auto aspect-w-16 aspect-h-9 m-auto md:m-0 object-cover"
                                                                        alt=""
                                                                    />
                                                                    <div>
                                                                        <p className="text-lg font-medium">
                                                                            {
                                                                                product?.name
                                                                            }
                                                                        </p>
                                                                        <p className="text-gray-500">
                                                                            Rs{" "}
                                                                            {
                                                                                product?.price
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-center">
                                                                <span className="text-lg ">
                                                                    {
                                                                        item?.quantity
                                                                    }
                                                                </span>
                                                            </td>

                                                            <td className="text-center">
                                                                <p className="text-gray-500">
                                                                    Rs{" "}
                                                                    {item?.quantity *
                                                                        product.price}
                                                                </p>
                                                            </td>
                                                            <td>
                                                                <span
                                                                    className="cursor-pointer text-sm border-b"
                                                                    onClick={() =>
                                                                        removeProductFromCart(
                                                                            item.productID
                                                                        )
                                                                    }
                                                                >
                                                                    <AiTwotoneDelete className="m-auto" />
                                                                   
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </>
                                    )}
                                </tbody>
                            </table>
                            <div className="">
                                <p className="text-lg font-semibold mt-4 text-[#3E3E42]">
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
                    ) : (
                        <span className="flex justify-center text-5xl text-[#9F7E7E]">
                            Your Cart Is Currently Empty.
                        </span>
                    )}
                    
                </>
            )}
        </div>
    );
};
