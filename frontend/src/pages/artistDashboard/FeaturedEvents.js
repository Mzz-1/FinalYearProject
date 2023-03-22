import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Label } from "../../components/Label";
import { UpdateButton } from "../../components/Button";
import { useUser } from "../../service/useUser";

const FeaturedEvents = () => {
    const user = useUser();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    watch("image");

    const addBiography = async (data) => {
        console.log("1");

        const formData = new FormData();
        formData.append("userID", user.id);
        formData.append("location", data.location);
        formData.append("name", data.name);
        formData.append("startDate", data.startDate);
        formData.append("endDate", data.endDate);

        formData.append("image", data.image[0]);

        console.log(data.name, data.startDate, data.endDate);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/add-artist-event",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            // console.log(
            //     name,
            //     place,
            //     location,
            //     image,
            //     startDate,
            //     endDate,
            //     startTime,
            //     endTime
            // );
            console.log(response.data);
            // const { token } = response.data;
            // console.log(token);
        } catch (err) {
            console.log(`err:${err}`);
        }
        
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px]">
            <h2 className="text-5xl font-semibold ">Add Featured Events</h2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(addBiography)}
            >
                <div className="grid grid-rows-1 grid-cols-1 gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <Label>Event Name</Label>
                        <Input
                            type="text"
                            placeholder="Name"
                            register={{
                                ...register("name", {
                                    required: "Please enter your name.",
                                }),
                            }}
                        />
                        <p>{errors.name?.message}</p>
                        <Label>Image</Label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register("image", {
                                required: "Please enter an image.",
                            })}
                        />
                        <p>{errors.image?.message}</p>
                        <label>Start Date</label>
                        <Input
                            type="date"
                            register={{
                                ...register("startDate", {
                                    required: "Please enter your password.",
                                }),
                            }}
                        />
                        <p>{errors.startDate?.message}</p>
                        <label>End Date</label>
                        <Input
                            type="date"
                            register={{
                                ...register("endDate", {
                                    required: "Please enter your password.",
                                }),
                            }}
                        />
                        <p>{errors.endDate?.message}</p>
                        <p>{errors.name?.message}</p>
                        <Label>Location</Label>
                        <Input
                            type="text"
                            placeholder="Location"
                            register={{
                                ...register("location", {
                                    required: "Please enter the location.",
                                }),
                            }}
                        />
                        <p>{errors.location?.message}</p>
                    </div>
                </div>

                <UpdateButton>Update Inforamtion</UpdateButton>
            </form>
        </div>
    );
};

export default FeaturedEvents;
