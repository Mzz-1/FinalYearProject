import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProductList } from "../store/ProductList";
import { Heading2 } from "../../components/Heading";
import { BlackButton, BlueButton, BrownButton } from "../../components/Button";
import { fetchAllProducts } from "../../redux-store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "../../components/Carousel";
import { Loader } from "../../components/LoaderWrapper";

export const NewProducts = () => {

  


    const dispatch = useDispatch();
    const { product } = useSelector((state) => state);

    const { data, fetchStatus } = product;

    const fetchProducts = async () => {
        dispatch(
            fetchAllProducts({
                searchItem: "",
                category: "",
                sort: "Newest to oldest",
                limit: 4,
            })
        );
    };

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);

    return (
        <div className="px-[50px]">
            <Heading2>Recently Added</Heading2>
            <br></br>
            <p className="font-montserrat text-center border-[#3E3E42] m-auto border-b w-[65px]">View All</p>
         
            <br></br>
            <br></br>
            {fetchStatus !== "success" ? (
                <Loader/>
            ) : data.product.length > 0 ? (
          
                <Carousel products={data.product}/>
            ) : (
                <p className="font-libre font-[35px] text-center font">
                    There are no products available at the moment.
                </p>
            )}
            <div className="text-center"></div>
        </div>
    );
};
