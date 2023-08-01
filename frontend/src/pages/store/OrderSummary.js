import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "../../service/useUser";
import { InfoToast, SuccessToast } from "../../helpers/Toast";
import {  Heading2 } from "../../components/Heading";
import KhaltiCheckout from "khalti-checkout-web";
import { Config } from "../../components/khalti/KhaltiConfig";

export const OrderSummary = () => {
    useEffect(() => {
        document.title = "Order Summary";
    }, []);
    let checkout = new KhaltiCheckout(Config);

    const [products, setProducts] = useState([]);
    const [delivery, setDelivery] = useState();
    const [disable, setDisable] = useState(true);
    const user = useUser();
    const [cart, setCart] = useState();
    const [subTotal, setSubTotal] = useState(0);

    const [isOrderPlaced,setIsOrderPlaced] =useState(false)

    const { id: deliveryID } = useParams();

    const navigate = useNavigate();

    const getCart = async () => {
        try {
            const cartData = await axios.get(
                `http://localhost:5000/api/cart/${user.id}`
            );
            const cart = cartData.data.cart;
            console.log(cart);
            setCart(cart);
        } catch (err) {
            InfoToast("Please log in to use the cart.");
        }
    };

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
        } catch (err) {
            console.log(err);
        }
    };

    const getDelivery = async (id) => {
        try {
            const deliveryData = await axios.get(
                `http://localhost:5000/api/delivery/${deliveryID}`
            );
            console.log("delivery", deliveryData.data.delivery);
            setDelivery(deliveryData.data.delivery);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts();
        getDelivery();
    }, []);

    useEffect(() => {
        if (cart && products.length) {
            let total = 0;
            for (let i = 0; i < cart.items.length; i++) {
                const item = cart.items[i];
                const product = products.find((p) => p._id === item.productID);
                total += item.quantity * product.price;
            }
            setSubTotal(total);
        }
    }, [cart, products]);

    const handlePaymentSuccess = async () => {
        if(!isOrderPlaced){
        try {
            // Make an API request to create the order
            const response = await axios.post(
                "http://localhost:5000/api/add-order",
                {
                    userId: user.id,
                    products: products.map((product) => ({
                        productId: product._id,
                        quantity: cart.items.find(
                            (item) => item.productID === product._id
                        ).quantity,
                        artist: product.artist,
                    })),
                    total: subTotal,
                }
            );

            // If the order creation is successful
            setDisable(false);

            await axios.delete(
                `http://localhost:5000/api/delete-cart/${user.id}`
            );
            // Display a success message to the user
            SuccessToast("Order placed successfully!");
            setIsOrderPlaced(true)
            // Redirect the user to the order confirmation or thank you page
        } catch (error) {
            console.error("Error creating order:", error);
            // Display an error message to the user
            InfoToast("Error creating order. Please try again.");
        }
    }else{
        InfoToast("Order Has already been placed")
    }
    };

    return (
        <div className="bg-gray-100 min-h-screen px-[50px]">
            <div className="text-center py-[40px]">
                {" "}
                <h2 className="text-5xl font-light text-[#9F7E7E]">
                    Order Summary
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
            <table className="md:bg-white  md:border-gray-300 w-[100%] rounded-md shadow-sm lg:h-[100px] lg:w-[70%]">
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
                                 
                                          {products?.map(
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
                                                          className=" py-9 border-b-2  first:border-t-2 md:text-lg text-sm"
                                                      >
                                                          <td className="text-center hidden md:table-cell">
                                                              {i + 1}
                                                          </td>
                                                          <td className=" ">
                                                              <div className=" md:py-8 flex items-center md:flex-row gap-4 ">
                                                                  <img
                                                                      src={
                                                                          product.url
                                                                      }
                                                                      className="md:h-24 md:w-24 w-[50px] h-auto aspect-w-16 aspect-h-9  md:m-0 object-cover"
                                                                      alt=""
                                                                  />
                                                                  <div className="text-left">
                                                                      <p className=" font-medium">
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
                                                          <td className="text-left md:text-center">
                                                            <span className="md:hidden">Qty: </span>
                                                              <span className=" ">
                                                                  {
                                                                      item?.quantity
                                                                  }
                                                              </span>
                                                          </td>

                                                          <td className="text-left md:text-center">
                                                          <span className="md:hidden font-medium">Total Price: </span>
                                                              <span className="text-gray-500">
                                                                  Rs{" "}
                                                                  {item?.quantity *
                                                                      product.price}
                                                              </span>
                                                          </td>
                                                          
                                                      </tr>
                                                  );
                                              }
                                          )}
                              
                              </tbody>
                          </table>
                <div className="bg-white md:w-[400px] m-auto py-[20px] px-[30px] rounded-md flex-1 mb-7">
                    <div className="flex flex-col gap-1 mb-[20px]">
                        <Heading2 text="Delivery Details" />

                        <p className="text-[#65635F] text-[16px] mt-[10px]">
                            District: {delivery?.district}
                        </p>
                        <p className="text-[#65635F] text-[16px]">
                            City: {delivery?.city}
                        </p>
                        <p className="text-[#65635F] text-[16px]">
                            Street: {delivery?.streetName}
                        </p>
                        <p className="text-[#65635F] text-[16px]">
                            Contact Number: {delivery?.contactNo}
                        </p>
                        <div className="flex items-center justify-between py-4">
                            <button
                                onClick={() => handlePaymentSuccess()}
                                className="bg-[#29CC97] text-white border border-gray-300 px-4 py-2 rounded-md shadow-sm"
                            >
                                Confirm Order
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Heading2 text="Payment Details" />
                        <p className="text-[#65635F] text-[16px] mt-[10px]">
                            Subtotal: Rs {subTotal}
                        </p>
                        <div className="flex items-center justify-between py-4">
                            <button
                                onClick={() => checkout.show({ amount: 1000 })}
                                disabled={disable}
                                className="bg-[#602c8c] text-white border border-gray-300 px-4 py-2 rounded-md shadow-sm"
                            >
                                Pay with Khalti
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
