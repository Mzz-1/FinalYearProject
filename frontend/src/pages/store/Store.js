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

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

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
        getValues,
        watch,
        formState: { errors },
    } = useForm();

    const getProducts = async ({
        searchItem = "",
        category = "",
        sort = "",
    }) => {
        setLoading(true);
        const productsData = await axios.get(
            `http://localhost:5000/api/products?name=${searchItem}&category=${category}&sort=${sort}&page=${page}`
        );

        const data = await productsData.data.product;
        setProducts(data);
        setLoading(false);
        console.log("getProducts", data);
    };

    useEffect(() => {
        setPage(1);
        getProducts({});
    }, []);

    const handleLoadMore = async () => {
        const { searchItem, category, sort } = getValues();
        setPage(page + 1);
        setLoading(true);
        const productsData = await axios.get(
          `http://localhost:5000/api/products?name=${searchItem}&category=${category}&sort=${sort}&page=${page + 1}`
        );
        const newProducts = productsData.data.product;
        setProducts([...products, ...newProducts]);
        setLoading(false);
      };

    return (
        <div className="bg-[#F4F4F2] px-[5%]">
            <div className="max-w-[1440px] m-auto flex flex-col justify-between items-center">
                <Banner heading="STORE" img='https://res.cloudinary.com/djuzpmqlp/image/upload/v1681139641/assets/banner_yo00ky.jpg'/>
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

                    <Search
                        register={{
                            ...register("searchItem", {
                                required: "Please enter a product name.",
                            }),
                        }}
                        onClick={() =>
                            getProducts({ searchItem: getValues("searchItem") })
                        }
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] m-auto">
                <hr className="h-[2px] bg-[#65635F] " />
                <ProductList products={products} gridSize={3} />
                {loading && <p>Loading...</p>}
                {!loading && products.length > 0 && (
                    <button onClick={handleLoadMore}>Load More</button>
                )}
            </div>
        </div>
    );
};

export default Store;
