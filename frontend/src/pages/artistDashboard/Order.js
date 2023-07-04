import { useState, useEffect } from "react";
import axios from "axios";
import { AdminHeading, AdminHeading2, Heading2 } from "../../components/Heading";
import { useUser } from "../../service/useUser";

export const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [productDetails, setProductDetails] = useState({});
    const user = useUser();

    const getOrders = async () => {
        try {
            const orderData = await axios.get(
                `http://localhost:5000/api/order/${"Pratham Maharjan"}`
            );
            const orders = orderData.data.orders;
            console.log("Orders", orders);
            setOrders(orders);
        } catch (err) {
            console.log(err);
        }
    };

    const getProductDetails = async (productId) => {
        try {
            const productData = await axios.get(
                `http://localhost:5000/api/products/${productId}`
            );
            const product = productData.data.product;
            return product;
        } catch (err) {
            console.log(err);
            return undefined;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const products = {};
            for (const order of orders) {
                for (const product of order.products) {
                    if (!products[product.productId]) {
                        products[product.productId] = await getProductDetails(
                            product.productId
                        );
                    }
                }
            }
            setProductDetails(products);
        };

        fetchData();
    }, [orders]);

    useEffect(() => {
        getOrders();
    }, [user]);

    return (
        <div className="flex flex-col gap-[40px] h-[100%]">
            <Heading2>Orders</Heading2>
            <div className="flex flex-col gap-[20px] border rounded-[10px] h-[90%] py-[30px] px-[20px] bg-white">
                <AdminHeading2>All Orders</AdminHeading2>
                <div className="overflow-scroll font-slab">
                    <table className="w-[100%] text-[#252733]">
                        <thead className="text-left top-0">
                            <tr className="text-[#A4A6B3] mx-[0px] my-[0px]">
                                <th className="font-extralight">SN</th>
                                <th className="font-extralight">
                                    Product Name
                                </th>
                                <th className="font-extralight">Category</th>
                                <th className="font-extralight">Dimensions</th>
                                <th className="font-extralight">Quantity</th>
                                <th className="font-extralight">Payment</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-scroll">
                            {orders.map((order, index) => (
                                <tr
                                    className="border-b divide-slate-400/25 h-[60px] first:border-t"
                                    key={order._id}
                                >
                                    <td>{index + 1}</td>
                                    {order.products.map((product, idx) => (
                                        <td key={idx}>
                                            {
                                                productDetails[
                                                    product.productId
                                                ]?.name
                                            }
                                        </td>
                                    ))}
                                    {order.products.map((product, idx) => (
                                        <td key={idx}>
                                            {
                                                productDetails[
                                                    product.productId
                                                ]?.category
                                            }
                                        </td>
                                    ))}
                                    {order.products.map((product, idx) => (
                                        <td key={idx}>
                                            {
                                                productDetails[
                                                    product.productId
                                                ]?.dimensions
                                            }
                                        </td>
                                    ))}
                                    {order.products.map((product, idx) => (
                                        <td key={idx}>{product.quantity}</td>
                                    ))}

                                    <td className="">Successful</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
