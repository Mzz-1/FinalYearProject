import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Product } from "../../components/Product";
export const ProductList = ({ products, gridSize, type }) => {

    return (
        <div
            className={`grid grid-row-auto grid-cols-2 sm:grid-cols-${gridSize} xl:grid-cols-3 justify-center items-center gap-5 sm:gap-[50px] mt-[20px]  sm:px-0`}
        >
            {products.map((product) => {
                return (
                    <Product type={type} product={product}/>
                );
            })}
        </div>
    );
};
