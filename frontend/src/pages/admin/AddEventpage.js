import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { SuccessToast, PromiseToast } from "../../helpers/Toast";
import { getSingleEvent, updateEvent, addEvent } from "../../helpers/Events";
import { DashboardActionButton } from "../../components/Button";

const AddEventPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    watch("image");

    const { id } = useParams();

    const [eventToEdit, setEventToUpdate] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const event = await getSingleEvent(id);
            setEventToUpdate(event);
        };
        fetchData();
    }, [id]);

    const EventAction = async (data) => {
        if (id) {
            // await updateEvent(data,eventToEdit._id)
            PromiseToast(
                "Event has been updated.",
                updateEvent(data, eventToEdit._id)
            );
        } else {
            addEvent(data);
            SuccessToast("Event has been added.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px]">
            <h2 className="text-5xl font-light border-b-[2px] pb-2 border-black ">
                {eventToEdit ? "Update Event" : "Add Event"}
            </h2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(EventAction)}
            >
                <div className="grid grid-rows-1 grid-cols-2 gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <label>Event Name</label>
                        <Input
                            type="text"
                            placeholder="Name"
                            defaultValue={eventToEdit?.name}
                            register={{
                                ...register("name", {
                                    required: "Please enter the event name.",
                                }),
                            }}
                        />
                        <p>{errors.name?.message}</p>
                        <label>Place</label>
                        <Input
                            type="text"
                            placeholder="Place"
                            defaultValue={eventToEdit?.place}
                            register={{
                                ...register("place", {
                                    required:
                                        "Please enter the event venue.",
                                }),
                            }}
                        />
                        <p>{errors.place?.message}</p>
                        <label>Location</label>
                        <Input
                            type="text"
                            placeholder="Location"
                            defaultValue={eventToEdit?.location}
                            register={{
                                ...register("location", {
                                    required: "Please enter event location.",
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
                            defaultValue={eventToEdit?.startDate}
                            register={{
                                ...register("startDate", {
                                    required: "Please enter the start date.",
                                }),
                            }}
                        />
                        <p>{errors.startDate?.message}</p>
                        <label>End Date</label>
                        <Input
                            type="date"
                            defaultValue={eventToEdit?.endDate}
                            register={{
                                ...register("endDate", {
                                    required: "Please enter the end date.",
                                }),
                            }}
                        />
                        <p>{errors.endDate?.message}</p>
                        <label>Start Time</label>
                        <Input
                            type="time"
                            defaultValue={eventToEdit?.startTime}
                            register={{
                                ...register("startTime", {
                                    required: "Please enter the start time.",
                                }),
                            }}
                        />
                        <p>{errors.startTime?.message}</p>
                        <label>End Time</label>
                        <Input
                            type="time"
                            defaultValue={eventToEdit?.endTime}
                            register={{
                                ...register("endTime", {
                                    required: "Please enter the end time.",
                                }),
                            }}
                        />
                        <p>{errors.endTime?.message}</p>
                    </div>
                </div>

                <DashboardActionButton>
                    {eventToEdit ? "Update Event" : "Add Event"}
                </DashboardActionButton>
            </form>
        </div>
    );
};

export default AddEventPage;
