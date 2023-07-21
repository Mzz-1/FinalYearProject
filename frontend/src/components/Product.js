import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Product = ({ product, type }) => {
    const navigate = useNavigate();

    const getProducts = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div
            className={`relative cursor-pointer font-playfair ${
                type === "gallery"
                    ? "grid 2xl:grid-cols-custom-2 items-center gap-11"
                    : type === "carousel"
                    ? "mx-5 mb-7 group hover:bg-[#f4f6f6]"
                    : type === "store"
                    ? " w-[100%] md:h-[500px] lg:h-[600px] group  hover:rounded-xl"
                    : ""
            } 
          `}
            data-aos={type !== "carousel" ? "fade-up" : null}
            onClick={() => getProducts(product._id)}
            key={product._id}
        >
            <div
                className={`${
                    type === "gallery"
                        ? ""
                        : type === "store"
                        ? "h-[480px] bg-[#373739] grid items-center"
                        : "bg-black"
                }`}
            >
                <div className={`${type==="store" ? "h-[380px] lg:h-[420px] p-5 bg-[#f7f7f6]  flex items-center justify-center m-7 hover:rounded-xl":""}`}>
                    <img
                        src={product.url}
                        className={`${
                            type === "gallery"
                                ? " max-h-[75vh] m-auto rounded-md "
                                : type === "store"
                                ? " max-h-[350px]  max-w-[300px] shadow-2xl rounded-sm"
                                : "w-[100%] md:h-[400px] lg:h-[500px]"
                        }
                    mb-[10px]  object-cover  transition-opacity duration-300  aspect-w-16 aspect-h-9 md:aspect-w-9 md:aspect-h-16`}
                        alt="product"
                    />
                </div>
            </div>
            <ul className=" text-[14px] sm:text-[16px] flex flex-col gap-[px] relative px-[10px] py-[10px] text-center ">
                <li className="text-[22px]  font-cinzel text-[#3C3737] border-b">
                    {product.name}
                </li>
                {type === "gallery" ? <hr></hr> : ""}
                <li className="text-[#65635F] ">By {product.artist}</li>
                <li className="text-[#65635F] ">{product.category}</li>
                {/* <li className="text-[#65635F] text-[18px]">
                    {product.dimensions}
                </li> */}
                {type === "gallery" ? (
                    ""
                ) : (
                    <li className=" text-[20px]  text-[#65635F]">
                        Rs {product.price}
                    </li>
                )}
            </ul>
           
        </div>
    );
};
