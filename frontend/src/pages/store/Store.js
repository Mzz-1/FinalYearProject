import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../components/Product";
import { ProductList } from "./ProductList";
import { Banner } from "../../components/Banner";
import { TfiSearch } from "react-icons/tfi";
import { Search } from "../../components/Search";
import { useForm } from "react-hook-form";
import { Select } from "../../components/Select";

const Store = () => {
    const [products, setProducts] = useState([]);

    const [searchItem, setSearchItem] = useState("");

    const categories = [
        "Painting",
        "Sculptures",
        "Ceramics",
        "Photography",
        "Drawings",
        "Prints",
    ];

    const sort = [
        "A-Z",
        "Z-A",
        "Price:Low to High",
        "Price:High to Low",
        "Oldest to Newest",
        "Newest to oldest",
    ];

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const getProducts = async ({ category = "", sort = "" }) => {
        const productsData = await axios.get(
            `http://localhost:5000/api/products?name=${searchItem}&category=${category}&sort=${sort}`
        );

        const data = await productsData.data.product;
        setProducts(data);
        console.log("getProducts", data);
    };

    useEffect(() => {
        getProducts({});
    }, []);

    return (
        <div className="bg-[#F4F4F2] px-[5%]">
            <div className="max-w-[1440px] m-auto flex flex-col justify-between items-center">
                <Banner heading="Store" />
                <div className="flex gap-[50px] items-center">
                    <p>Filter By:</p>
                    <Select
                        text="Sort By"
                        options={sort}
                        register={{
                            ...register("sort", {
                                required: "Please select an option.",
                            }),
                        }}
                        onChange={(e) => getProducts({ sort: e.target.value })}
                    />
                    <Select
                        text="Select a category"
                        options={categories}
                        register={{
                            ...register("category", {
                                required: "Please select a category.",
                            }),
                        }}
                        onChange={(e) =>
                            getProducts({ category: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="KEYWORDS"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                        className="w-[450px] relative h-[70px] my-[40px] mr-[0px] ml-auto shadow-in outline-none pl-[30px] pr-[80px]"
                    />{" "}
                    <button className="relative" onClick={getProducts}>
                        {" "}
                        <TfiSearch
                            size={30}
                            color="grey"
                            className="absolute right-[60px] top-[-15px]"
                        />
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] m-auto">
                <hr className="h-[2px] bg-[#65635F] " />
                <ProductList products={products} gridSize={4} />
            </div>
        </div>
    );
};

export default Store;
