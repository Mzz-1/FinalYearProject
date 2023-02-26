import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";

const AddEventPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    watch("image");
    const [image64, setImage64] = useState("");

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage64(reader.result);
        };
    };

    const addEvent = async ({
        name,
        place,
        location,
        image,
        startDate,
        endDate,
        startTime,
        endTime,
    }) => {
        console.log("1");
        if (image.length > 0) {
            console.log("no image");
            setFileToBase(image[0]);
        }

        console.log(image64);
        try {
            const response = await axios.post(
                "http://localhost:5000/api/events",
                {
                    name: name,
                    place: place,
                    location: location,
                    image: image64,
                    startDate: startDate,
                    endDate: endDate,
                    startTime: startTime,
                    endTime: endTime,
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
            <h2 className="text-5xl font-semibold ">Add Event</h2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(addEvent)}
            >
                <div className="grid grid-rows-1 grid-cols-2 gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <label>Event Name</label>
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
                        <label>Place</label>
                        <Input
                            type="text"
                            placeholder="Place"
                            register={{
                                ...register("place", {
                                    required:
                                        "Please enter your email address.",
                                }),
                            }}
                        />
                        <p>{errors.place?.message}</p>
                        <label>Location</label>
                        <Input
                            type="text"
                            placeholder="Location"
                            register={{
                                ...register("location", {
                                    required: "Please enter your password.",
                                }),
                            }}
                        />
                        <p>{errors.location?.message}</p>
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
                        <label>Start Time</label>
                        <Input
                            type="time"
                            register={{
                                ...register("startTime", {
                                    required: "Please enter your password.",
                                }),
                            }}
                        />
                        <p>{errors.startTime?.message}</p>
                        <label>End Time</label>
                        <Input
                            type="time"
                            register={{
                                ...register("endTime", {
                                    required: "Please enter your password.",
                                }),
                            }}
                        />
                        <p>{errors.endTime?.message}</p>
                    </div>
                </div>
                <button className="w-[440px] h-[50px] bg-[#9F7E7E] text-white text-2xl rounded-[10px]">
                    Add Event
                </button>
            </form>
        </div>
    );
};

export default AddEventPage;
