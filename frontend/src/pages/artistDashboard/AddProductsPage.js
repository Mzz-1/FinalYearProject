import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Input from "../../components/Input";
import { useUser } from "../../service/useUser";
import { DashboardActionButton } from "../../components/Button";
import { ErrorToast, PromiseToast } from "../../helpers/Toast";
import { useParams } from "react-router-dom";
import { Heading2 } from "../../components/Heading";
import { Textarea } from "../../components/Input";
import {
    updateProducts,
    addProducts,
    getProduct,
} from "../../redux-store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtists } from "../../redux-store/artistSlice";

const AddProductPage = () => {
    const user = useUser();

    const { id } = useParams();

    const dispatch = useDispatch();

    const product = useSelector((state) => state.product);

    const artist = useSelector((state) => state.artist);

    const { productData, getStatus } = product;

    const { artist: artistData, getStatus: artistGetStatus } = artist;

    useEffect(() => {
        if (id) {
            dispatch(getProduct({ id }));
        }
        const userID = user.id;
        dispatch(fetchArtists({ userID }));
    }, [id]);
    console.log(artistData, "data");

    const categories = [
        "Painting",
        "Sculptures",
        "Ceramics",
        "Photography",
        "Drawings",
        "Prints",
    ];
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    watch("image");

    useEffect(() => {
        document.title = "Add Products | Artist Dashboard";
    }, []);

    const ProductAction = async (data) => {
        try {
            if (getStatus !== "success") {
                const artistName = artistData.artist.name;
                PromiseToast(
                    "Product has been added",
                    dispatch(addProducts({ data, artistName }))
                );
            } else {
                const artistName = artistData.artist.name;
                const productEditID = productData.product._id;
                console.log("proID", productEditID);
                PromiseToast(
                    "Product has been updated",
                    dispatch(
                        updateProducts({ data, artistName, productEditID })
                    )
                );
            }
        } catch {
            ErrorToast("Something went wrong");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px]">
            <Heading2>
                {" "}
                {getStatus !== "success" ? "Add Product" : "Update Product"}
            </Heading2>
            {artistGetStatus === "success" ? (
                <form
                    className="flex flex-col gap-[20px] my-[20px]"
                    onSubmit={handleSubmit(ProductAction)}
                >
                    <div className="grid grid-rows-1 grid-cols-2 gap-[30px] font-slab">
                        <div className="flex flex-col gap-[20px]">
                            <label>Product Name</label>
                            <Input
                                type="text"
                                placeholder="Name"
                                defaultValue={productData.product?.name}
                                register={{
                                    ...register("name", {
                                        required:
                                            "Please enter the product name.",
                                    }),
                                }}
                            />
                            <p>{errors.name?.message}</p>
                            <label>Category</label>

                            <select
                                className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                                {...register("category", {
                                    required: "Please select a category.",
                                })}
                                defaultValue={productData?.product?.category}
                            >
                                <option value="">Select a category</option>
                                {categories.map((category, i) => (
                                    <option key={i} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <p>{errors.category?.message}</p>

                            <label>Description</label>
                            <Textarea
                                type="text"
                                placeholder="Description"
                                defaultValue={productData?.product?.description}
                                register={{
                                    ...register("description", {
                                        required: "Please enter Description.",
                                    }),
                                }}
                            />
                            <p>{errors.description?.message}</p>
                            <label>Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register("image", {
                                    required: "Please enter an image.",
                                })}
                            />
                            <p>{errors.image?.message}</p>
                        </div>
                        <div className="flex flex-col  gap-[20px]">
                            <label>Quantity</label>
                            <Input
                                type="number"
                                defaultValue={productData?.product?.quantity}
                                register={{
                                    ...register("quantity", {
                                        required: "Please enter quantity.",
                                    }),
                                }}
                            />
                            <p>{errors.quantity?.message}</p>
                            <label>Dimentions</label>
                            <div className="flex gap-[20px] items-center">
                                <input
                                    className="w-[130px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                                    type="number"
                                    placeholder="length"
                                    {...register("length", {
                                        required: "Please enter the length.",
                                    })}
                                />
                                <p>{errors.length?.message}</p>

                                <p>X</p>

                                <input
                                    className="w-[130px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
                                    type="number"
                                    placeholder="breadth"
                                    {...register("breadth", {
                                        required: "Please enter the breadth.",
                                    })}
                                />
                                <p>{errors.breadth?.message}</p>
                                <p>Inches</p>
                            </div>

                            <label>Price</label>
                            <Input
                                type="number"
                                placeholder="Price"
                                defaultValue={productData?.product?.price}
                                register={{
                                    ...register("price", {
                                        required: "Please enter the price.",
                                    }),
                                }}
                            />
                            <p>{errors.price?.message}</p>
                        </div>
                    </div>
                    <DashboardActionButton>
                        {getStatus !== "success"
                            ? "Add Product"
                            : "Update Product"}
                    </DashboardActionButton>
                </form>
            ) : (
                "loading"
            )}
        </div>
    );
};

export default AddProductPage;
