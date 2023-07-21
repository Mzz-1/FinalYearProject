import { useEffect, useState } from "react";
import axios from "axios";
import { ProductList } from "./ProductList";
import { Banner } from "../../components/Banner";
import { TfiSearch } from "react-icons/tfi";
import { Search } from "../../components/Search";
import { useForm } from "react-hook-form";
import { Select } from "../../components/Select";
import { Heading, Heading1, Heading2 } from "../../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../redux-store/productSlice";
import { fetchAllProducts } from "../../redux-store/productSlice";
import { BrownButton } from "../../components/Button";
import { Loader } from "../../components/LoaderWrapper";

const Store = () => {
    useEffect(() => {
        document.title = "The Art Store";
    }, []);

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const product = useSelector((state) => state.product);

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

    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

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
        <div className=" ">
            <Banner
                heading="THE ART STORE"
                img="https://res.cloudinary.com/djuzpmqlp/image/upload/v1681139641/assets/banner_yo00ky.jpg"
            />
            <div className="max-w-[1440px] m-auto flex flex-col justify-between items-center px-[5%]">
                <div
                    className=" top-[450px] bg-white xl:h-[230px] max-w-[1300px] w-[100%] m-auto xl:border px-12 py-9 xl:absolute "
                    data-aos="fade-down"
                >
                    <h2 className="text-[#726d6d] text-[18px] text-center xl:text-left font-roboto mb-2">
                        SEARCH FOR ARTWORK
                    </h2>
                    <hr className="bg-[#65635F] mb-6 lg:mb-0" />

                    <div
                        className={` gap-5 xl:gap-[50px] items-center font-slab flex-col xl:flex-row flex`}
                    >
                        <div className="absolute top-[65%] lg:top-[85%] left-0 xl:relative">
                            <Select
                                text="Sort By"
                                options={sort}
                                register={{
                                    ...register("sort", {
                                        required: "Please select an option.",
                                    }),
                                }}
                            />
                        </div>
                        <div className="absolute top-[65%] lg:top-[85%] right-0 xl:relative">
                            <Select
                                text="Category"
                                options={categories}
                                register={{
                                    ...register("category", {
                                        required: "Please select a category.",
                                    }),
                                }}
                            />
                        </div>
                        <div className="absolute top-[-85%] sm:top-[-100%] lg:top-[-125%] xl:relative">
                            <Search
                                register={{
                                    ...register("searchItem", {
                                        required:
                                            "Please enter a product name.",
                                    }),
                                }}
                                onClick={() => fetchProducts()}
                            />
                        </div>
                        <div className="hidden xl:block">
                            <BrownButton onclick={fetchProducts}>
                                FILTER
                            </BrownButton>
                        </div>
                         
                        <div className="absolute top-[45%] flex justify-center xl:hidden">
                           
                            <button className="absolute top-[90px] w-[120px] border-b " onClick={fetchProducts}>Show Results</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] px-5 m-auto mt-[70px] lg:mt-[150px]">
                <div className="flex justify-between items-center">
                    <p className="font-slab font-semibold text-[#605e5e]">
                        Home / Store
                    </p>
                    <p className="font-slab font-semibold text-[#605e5e]">
                        {fetchStatus === "success" && products.product.length}{" "}
                        Artworks:
                    </p>
                </div>
                <hr className="bg-[#65635F] " />
                {fetchStatus !== "success" ? (
                    <Loader />
                ) : products.product.length > 0 ? (
                    <ProductList products={products.product} gridSize={3} />
                ) : (
                    <div className=" h-[50vh] flex items-center justify-center">
                        <Heading1>
                            {" "}
                            There are no products available at the moment.
                        </Heading1>
                    </div>
                )}
                {fetchStatus === "success" && products.product.length > 0 && (
                    <button
                        className="p-3 border-2 w-[200px] mb-5 m-auto font-slab bg-[#9F7E7E] font-medium text-[#fefefe] rounded-lg"
                        // onClick={handleLoadMore}
                    >
                        LOAD MORE
                    </button>
                )}
                {fetchStatus === "success" && products.product.length <= 0 && (
                    <button
                        className="p-3 border-2 w-[200px] mb-5 m-auto font-slab bg-[#9F7E7E] font-medium text-[#fefefe] rounded-lg"
                        // onClick={handleLoadMore}
                    >
                        No more roducts to show.
                    </button>
                )}
            </div>
        </div>
    );
};

export default Store;
