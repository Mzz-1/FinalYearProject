import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Banner } from "../../components/Banner";
import { ProductList } from "./ProductList";
import { useUser } from "../../service/useUser";
import { InfoToast } from "../../helpers/Toast";

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const user = useUser();
  const [cart, setCart] = useState();
  const [subTotal, setSubTotal] = useState(0);

  const navigate = useNavigate()

  const getCart = async () => {
    try{
    const cartData = await axios.get(
      `http://localhost:5000/api/cart/${user.id}`
    );
    const cart = cartData.data.cart;
    console.log(cart);
    setCart(cart);
  }catch(err){
    InfoToast("Please log in to use the cart.")
  }
  }


  useEffect(() => {
    getCart();
  }, []);

  const getProducts = async (id) => {
    try{
    const productData = await axios.get(
      `http://localhost:5000/api/cartProducts/${user.id}`
    );
    console.log("details", productData.data.products);
    setProducts(productData.data.products);
    }catch(err){
      console.log(err)
     
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (cart && products.length) {
      let total = 0;
      for (let i = 0; i < cart.items.length; i++) {
        const item = cart.items[i];
        const product = products.find(p => p._id === item.productID);
        total += item.quantity * product.price;
      }
      setSubTotal(total);
    }
  }, [cart, products]);

 

  return (
    <div className="bg-gray-100 min-h-screen px-[50px]">
      <Banner heading="My Cart" />

      <div className="flex flex-col gap-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white border border-gray-300 rounded-md shadow-sm p-4">
        <div className="flex flex-col md:flex-row gap-4 md:items-center w-full">
          <div className="w-full md:w-2/5">
            <h3 className="text-lg font-semibold">Product</h3>
          </div>
          <div className="w-full md:w-1/5 text-center">
            <h3 className="text-lg font-semibold">Quantity</h3>
          </div>
          <div className="w-full md:w-2/5 text-right">
            <h3 className="text-lg font-semibold">Price</h3>
          </div>
        </div>
      </div>
        <div className="w-full">
          <div className="flex flex-col gap-8">
            {products?.map((product) => {
              console.log("product", product);
          
              return (
                <div
                  key={product._id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between bg-white border border-gray-300 rounded-md shadow-sm p-4"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:items-center">
                    <img
                      src={product.url}
                      className="h-24 w-24 object-contain"
                      alt=""
                    />
                    <div>
                      <p className="text-lg font-semibold">{product.name}</p>
                      <p className="text-gray-500">Rs {product.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <div className="flex items-center gap-2">
                      <button className="text-lg text-gray-500 bg-gray-200 rounded-full px-4 py-1 focus:outline-none">
                        -
                      </button>
                      <span className="text-lg font-semibold">{cart && cart.items.find(item => item.productID === product._id).quantity}</span>
                      <button className="text-lg text-gray-500 bg-gray-200 rounded-full px-4 py-1 focus:outline-none">
                        +
                      </button>
                    </div>
                    <p className="text-gray-500">
                      Rs {cart.items.find(item => item.productID === product._id).quantity * product.price}
                     
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
            <div>
                Total: {subTotal}
            </div>
        <div className="flex items-center justify-between py-4">
          <button
            onClick={() => navigate(`/checkout/${cart._id}`)}
            className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            Checkout
          </button>

        </div>

        </div>

        </div>
  )
        }