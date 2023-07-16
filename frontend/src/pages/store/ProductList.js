import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Product } from "../../components/Product";
export const ProductList = ({ products, gridSize, type }) => {

    return (
        <div
            className={`grid grid-row-auto grid-cols-${gridSize}  justify-center items-center gap-[50px] mt-[20px]`}
        >
            {products.map((product) => {
                return (
                    <Product type={type} product={product}/>
                );
            })}
        </div>
    );
};
