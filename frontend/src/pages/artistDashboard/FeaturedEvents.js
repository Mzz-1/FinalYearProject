import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Input from "../../components/Input";
import { Label } from "../../components/Label";
import { UpdateButton } from "../../components/Button";
import { useUser } from "../../service/useUser";
import { useParams } from "react-router-dom";
import { PromiseToast } from "../../helpers/Toast";
import { Heading2 } from "../../components/Heading";
import {
    fetchExhibition,
    addExhibition,
    updateExhibition,
} from "../../redux-store/exhibitionSlice";
import { useDispatch, useSelector } from "react-redux";
import { FormatDate } from "../../helpers/FormatDate";

const FeaturedEvents = () => {
    const user = useUser();

    const { id } = useParams();

    const [eventToEdit, setEventToUpdate] = useState();

    const dispatch = useDispatch();

    const exhibition = useSelector((state) => state.exhibition);

    const { data:eventData, fetchStatus } = exhibition;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        dispatch(fetchExhibition({ id }));
    }, [id]);

    const ExhibitionAction = async (data) => {
        const userID = user.id;
        const eventID = eventData?.exhibition?._id;
        if (id) {
            PromiseToast(
                "Event has been updated.",
                dispatch(updateExhibition({ data, userID, eventID }))
            );
        } else {
            PromiseToast(
                "Event has been Added.",
                dispatch(addExhibition({ data, userID }))
            );
        }
    };
    

    return (
        
        <div className="flex flex-col items-center justify-center gap-[20px]">
          
            <Heading2>
                {" "}
                {eventData ? "Update Event Details" : "Add Featured Events"}
            </Heading2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(ExhibitionAction)}
            >
                <div className="grid grid-rows-1 grid-cols-1 gap-[30px] font-slab">
                    <div className="flex flex-col gap-[20px]">
                        <Label>Event Name</Label>
                        <Input
                            type="text"
                            placeholder="Name"
                            defaultValue={eventData?.exhibition?.name}
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
                            defaultValue={eventData?.exhibition?.startDate}
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
                            defaultValue={eventData?.exhibition?.endDate}
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
                            defaultValue={eventData?.exhibition?.location}
                            register={{
                                ...register("location", {
                                    required: "Please enter the location.",
                                }),
                            }}
                        />
                        <p>{errors.location?.message}</p>
                    </div>
                </div>

                <UpdateButton>
                    {eventData ? "Update Event" : "Add Event"}
                </UpdateButton>
            </form>

        </div>
    );
};

export default FeaturedEvents;
