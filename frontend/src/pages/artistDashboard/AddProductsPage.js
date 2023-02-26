import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";

const AddProductPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    watch("image");
    // const [image64, setImage64] = useState("");

    // const setFileToBase = (file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         setImage64(reader.result);
    //     };
    // };

    const addEvent = async (data) => {
        console.log("1");

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("artist", "as");
        formData.append("category", data.category);
        formData.append("description", data.description);
        formData.append("quantity", data.quantity);
        formData.append("price", data.price);
        formData.append("dimensions", data.dimensions);
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
            <h2 className="text-5xl font-semibold ">Add Event</h2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(addEvent)}
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
                        <Input
                            type="text"
                            placeholder="Category"
                            register={{
                                ...register("category", {
                                    required:
                                        "Please enter your email address.",
                                }),
                            }}
                        />
                        <p>{errors.category?.message}</p>
                        <label>Description</label>
                        <Input
                            type="text"
                            placeholder="Description"
                            register={{
                                ...register("description", {
                                    required: "Please enter your password.",
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
                                    required: "Please enter your password.",
                                }),
                            }}
                        />
                        <p>{errors.quantity?.message}</p>
                        <label>Dimentions</label>
                        <Input
                            type="text"
                            placeholder="eg 10x12"
                            register={{
                                ...register("dimensions", {
                                    required: "Please enter your password.",
                                }),
                            }}
                        />
                        <p>{errors.dimensions?.message}</p>

                        <label>Price</label>
                        <Input
                            type="text"
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
                <button className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;
