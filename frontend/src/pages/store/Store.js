import { useEffect, useState } from "react";
import axios from "axios";
import { ProductList } from "./ProductList";
import { Banner } from "../../components/Banner";
import { TfiSearch } from "react-icons/tfi";
import { Search } from "../../components/Search";
import { useForm } from "react-hook-form";
import { Select } from "../../components/Select";
import { Heading, Heading1 } from "../../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../store/productSlice";
import { fetchAllProducts } from "../../store/productSlice";
import { BrownButton } from "../../components/Button";

const Store = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const state = useSelector((state) => state);

    const { product } = state;

    const { fetchStatus, data: products } = product;

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

    const fetchProducts = async () => {
        const { searchItem, category, sort } = getValues();
        dispatch(
            fetchAllProducts({
                searchItem: searchItem,
                category: category,
                sort: sort,
            })
        );
    };

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);

    useEffect(() => {
        setPage(1);
        // getProducts({});
    }, []);

    // const handleLoadMore = async () => {
    //     const { searchItem, category, sort } = getValues();
    //     setPage(page + 1);
    //     setLoading(true);
    //     const productsData = await axios.get(
    //         `http://localhost:5000/api/products?name=${searchItem}&category=${category}&sort=${sort}&page=${
    //             page + 1
    //         }`
    //     );
    //     const newProducts = productsData.data.product;
    //     setProducts([...products, ...newProducts]);
    //     setLoading(false);
    // };

    return (
        <div className=" px-[5%]">
            <div className="max-w-[1440px] m-auto flex flex-col justify-between items-center">
                <Banner
                    heading="STORE"
                    img="https://res.cloudinary.com/djuzpmqlp/image/upload/v1681139641/assets/banner_yo00ky.jpg"
                />
                <div
                    className=" top-[450px] bg-white h-[230px] border px-12 py-9 absolute "
                    data-aos="fade-down"
                >
                    <h2 className="text-[#726d6d] text-[18px] font-roboto mb-2">
                        SEARCH FOR ARTWORK
                    </h2>
                    <hr className="bg-[#65635F] " />
                    <div className="flex gap-[50px] items-center font-slab  ">
                        <Select
                            text="Sort By"
                            options={sort}
                            register={{
                                ...register("sort", {
                                    required: "Please select an option.",
                                }),
                            }}
                        />
                        <Select
                            text="Select a category"
                            options={categories}
                            register={{
                                ...register("category", {
                                    required: "Please select a category.",
                                }),
                            }}
                        />

                        <Search
                            register={{
                                ...register("searchItem", {
                                    required: "Please enter a product name.",
                                }),
                            }}
                            onClick={() =>
                                fetchProducts()
                            }
                        />

                        <BrownButton onclick={fetchProducts}>
                            FILTER
                        </BrownButton>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] m-auto mt-[150px]">
                <div className="flex justify-between items-center">
                    <Heading>Shop Our Latest Products !</Heading>
                    <p className="font-slab font-semibold text-[#9F7E7E]">
                        {fetchStatus === "success" && products.product.length}{" "}
                        Artworks:
                    </p>
                </div>
                <hr className="bg-[#65635F] " />
                {fetchStatus !== "success" ? (
                    <p>Loading...</p>
                ) : products.product.length > 0 ? (
                    <ProductList products={products.product} gridSize={3} />
                ) : (
                    <p className="font-libre font-[35px] text-center font">
                        There are no products available at the moment.
                    </p>
                )}
                {fetchStatus === "success" && products.product.length > 0 && (
                    <button
                        className="p-3 border-2 w-[200px] mb-5 m-auto font-slab bg-[#9F7E7E] font-medium text-[#fefefe] rounded-lg"
                        // onClick={handleLoadMore}
                    >
                        LOAD MORE
                    </button>
                )}
            </div>
        </div>
    );
};

export default Store;
