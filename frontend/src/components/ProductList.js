import { AiOutlineShoppingCart } from "react-icons/ai";

export const ProductList = ({ products }) => {
    console.log(products);
    return (
        <div className="grid grid-row-auto grid-cols-4 bg-[] justify-center items-center gap-[100px] my-[50px]">
            {products.map((product) => {
                return (
                    <div className="relative">
                        <img
                            src={product.url}
                            className=" mb-[10px]"
                            alt="product"
                        />
                        <ul className="flex flex-col gap-[2px] relative px-[10px] py-[10px]">
                            <li className="font-medium text-[18px]">
                                {product.name}
                            </li>
                            <li className="text-[#65635F] text-[15px]">
                                {product.artist}
                            </li>
                            <li className="text-[#65635F] text-[15px]">
                                {product.category}
                            </li>
                            <li className="text-[#65635F] text-[15px]">
                                {product.dimensions}
                            </li>
                            <li className="absolute top-[10px] right-[10px] text-[18px]">
                                Rs {product.price}
                            </li>
                        </ul>
                        <button className="flex justify-center items-center h-[40px] w-[100px] absolute bottom-[10px] right-[10px] border-black border-[1px] rounded-[3px]">
                            {" "}
                            <AiOutlineShoppingCart size={20} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
