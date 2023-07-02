import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Product = ({product,type})=>{
    const navigate = useNavigate();

    const getProducts = async (id) => {
        const productData = await axios.get(
            `http://localhost:5000/api/products/${id}`
        );
        console.log(productData.data.product);

        navigate(`/product/${id}`);
    };
    return (
        <div
            className={`relative cursor-pointer ${
                type === "gallery"
                    ? "grid grid-cols-custom-2 items-center"
                    : "group"
            } 
            ${
                type === "carousel"
                    ? "mx-5"
                    : ""
            } `}
            data-aos="fade-up"
            onClick={() => getProducts(product._id)}
            key={product._id}
        >
            <img
                src={product.url}
                className={`${
                    type === "gallery"
                        ? "w-[auto] h-[75vh] m-auto"
                        : "w-[100%] h-[500px]"
                } mb-[10px]  object-cover  transition-opacity duration-300 group-hover:opacity-75`}
                alt="product"
            />
            <ul className="flex flex-col gap-[2px] relative px-[10px] py-[10px] text-center font-slab">
                <li className=" text-[28px] font-libre text-[#65635F]">
                    {product.name}
                </li>
                <li className="text-[#65635F] text-[15px]">
                    By {product.artist}
                </li>
                <li className="text-[#65635F] text-[15px]">
                    {product.category}
                </li>
                <li className="text-[#65635F] text-[15px]">
                    {product.dimensions}
                </li>
                {type === "gallery" ? (
                    ""
                ) : (
                    <li className=" text-[28px] font-libre text-[#65635F]">
                        Rs {product.price}
                    </li>
                )}
            </ul>
            {type === "gallery" ? (
                ""
            ) : (
                <button className="flex justify-center items-center p-3 border-2 w-[200px] mb-5 m-auto font-slab bg-[#9F7E7E] font-medium text-[#fefefe] rounded-lg  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {" "}
                    {product.quantity <= 0 ? (
                        <span className="font-slab">SOLD OUT</span>
                    ) : (
                        <span className="font-slab">
                            VIEW DETAILS
                        </span>
                    )}
                </button>
            )}
        </div>
    );
}