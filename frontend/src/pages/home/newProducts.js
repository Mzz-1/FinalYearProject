import { useState, useEffect } from "react";
import axios from "axios";
import { ProductList } from "../../components/ProductList";
import { Heading2 } from "../../components/Heading";

export const NewProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/products?limit=4`
        );

        const data = await productsData.data.product;
        setProducts(data);
        console.log("getProducts", data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="px-[50px]">
            <Heading2 text="New"/>
            <ProductList products={products}/>
        </div>
    )
};
