import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../components/Product";
import { ProductList } from "../components/ProductList";

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
        <div>
            <h1>store</h1>
            
            <ProductList products={products}/>
        </div>
    );
};

export default Store;
