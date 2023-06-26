import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../service/useUser";
import { getProducts } from "../../helpers/Product";
import { SuccessToast, InfoToast } from "../../helpers/Toast";

export const ProductDetails = () => {
    const [product, setProducts] = useState([]);
    const [isButtonDisabled, setIsButtonDisplayed] = useState(false);

    const user = useUser();

    const { id } = useParams();

    const navigate = useNavigate();

    // const getProducts = async () => {
    //     const productData = await axios.get(
    //         `http://localhost:5000/api/products/${id}`
    //     );
    //     console.log(productData.data.product);
    //     setProducts(productData.data.product);
    // };

    useEffect(() => {
        const fetchData = async () => {
            const event = await getProducts(id);
            setProducts(event);
        };
        fetchData();
    }, [id]);

    useEffect(() => getProducts, []);

    const addToCart = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/add-to-cart",
                {
                    userID: user.id,
                    productID: product._id,
                    quantity: 1,
                }
            );
            console.log(response.data);
            navigate("/cart");
            SuccessToast("Product added to cart.");
        } catch (error) {
            console.error(error);

            navigate("/login");
            InfoToast("Please log in to use the cart.");
        }
    };

    useEffect(() => {
        if (product.quantity <= 0) {
            setIsButtonDisplayed(true);
        }
    });

    return (
        <div className="grid grid-row-auto grid-cols-2 bg-[] justify-center gap-[100px] ">
            <div className="bg-[#F4F4F2] h-[770px] flex items-center justify-center">
                <img
                    src={product.url}
                    className=" mb-[10px] h-[70%] shadow-2xl"
                    alt="product"
                />
            </div>

            <div className="relative w-[420px] ">
                <ul className="flex flex-col gap-[2px] relative px-[10px] py-[100px] font-slab">
                    <button
                        className="flex gap-2 items-center mb-9"
                        onClick={() => navigate(-1)}
                    >
                        <BiArrowBack /> BACK
                    </button>
                    <li className="text-[34px] fo">{product.name}</li>
                    <li className="text-[#65635F] text-[18px] mb-[30px]">
                        By {product.artist}
                    </li>
                    <li className="text-[#65635F] text-[15px]">
                        {product.category}
                    </li>
                    <li className="text-[#65635F] text-[15px] mb-[30px]">
                        {product.dimensions}
                    </li>
                    <li className="text-[#65635F] text-[15px]">
                        {product.description}
                    </li>
                    <hr className="h-[2px] bg-[#65635F] my-[30px]" />
                    <li className="text-[25px] mb-[30px] font-medium">
                        Rs {product.price}
                    </li>
                    <button
                        className="flex justify-center items-center h-[40px] w-[350px] bg-[#161412] text-white rounded-[3px]"
                        onClick={addToCart}
                        disabled={isButtonDisabled}
                    >
                        {product.quantity <= 0 ? (
                            <span>SOLD OUT</span>
                        ) : (
                            <span>ADD TO CART</span>
                        )}
                    </button>
                </ul>
            </div>
        </div>
    );
};
