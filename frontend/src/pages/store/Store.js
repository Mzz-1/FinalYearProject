import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../components/Product";
import { ProductList } from "./ProductList";
import { Banner } from "../../components/Banner";

import { Search } from "../../components/Search";

const Store = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/products`
        );

        const data = await productsData.data.product;
        setProducts(data);
        console.log("getProducts", data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="bg-[#F4F4F2]">
            <Banner heading="Store" />
            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] m-auto">
                <Search />
                <hr className="h-[2px] bg-[#65635F] " />
                <ProductList products={products} />
            </div>
        </div>
    );
};

export default Store;
