import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";
import { useUser } from "../../service/useUser";
import { DashboardActionButton } from "../../components/Button";
import { PromiseToast } from "../../helpers/Toast";
import { useParams } from "react-router-dom";
import { getProducts } from "../../helpers/Product";

const AddProductPage = () => {
    const user = useUser();

    const { id } = useParams();

    const [productToEdit, setProductToUpdate] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const event = await getProducts(id);
            setProductToUpdate(event);
        };
        fetchData();
    }, [id]);

    const [artistName, setArtistName] = useState("");

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

    const ProductAction = async (data) => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/artist/${user.id}`
            );
            console.log(response.data.artist.name);
            setArtistName(response.data.artist.name);
        } catch (err) {
            console.log(`err:${err}`);
        }

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("artist", artistName);
        formData.append("category", data.category);
        formData.append("description", data.description);
        formData.append("quantity", data.quantity);
        formData.append("price", data.price);
        formData.append("dimensions", `${data.length} X ${data.breadth} in`);
        formData.append("image", data.image[0]);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/products",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            console.log(response.data);
            // const { token } = response.data;
            // console.log(token);
        } catch (err) {
            console.log(`err:${err}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px]">
            <h2 className="text-5xl font-semibold ">Add Product</h2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(ProductAction)}
            >
                <div className="grid grid-rows-1 grid-cols-2 gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <label>Product Name</label>
                        <Input
                            type="text"
                            placeholder="Name"
                            register={{
                                ...register("name", {
                                    required: "Please enter your username.",
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
                        <Input
                            type="text"
                            placeholder="Description"
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
                            register={{
                                ...register("price", {
                                    required: "Please enter the price.",
                                }),
                            }}
                        />
                        <p>{errors.price?.message}</p>
                    </div>
                </div>
                <DashboardActionButton>Add Product</DashboardActionButton>
            </form>
        </div>
    );
};

export default AddProductPage;
