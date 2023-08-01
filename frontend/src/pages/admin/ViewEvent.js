import { useState,useEffect } from "react";
import { fetchEvent } from "../../redux-store/eventSlice";
import { useDispatch,useSelector } from "react-redux";



const ViewEvents = ({ eventID }) => {

    const dispatch= useDispatch()

const event = useSelector((state)=>state.event)

const { eventData} = event

useEffect(()=>{
    dispatch(fetchEvent({id:eventID}))
},[eventID])

    const dateOptions = { day: "numeric", month: "long", year: "numeric" };
    var startDateTime = new Date(eventData?.event?.startDate);
    const newStartDate = startDateTime.toLocaleDateString("en-US", dateOptions);

    var endDateTime = new Date(eventData?.event?.endDate);
    const newEndDate = endDateTime.toLocaleDateString("en-US", dateOptions);
    useEffect(()=>{
        document.title = "View Events | Admin Dashboard"; 

    },[])
    return (
        <div className="my-[50px]">
            <div className="grid grid-rows-1 grid-cols-2 gap-[0px] justify-center items-center font-slab">
                <div className="text-[18px] w-[80%]">
                    <h3 className="text-[35px]">{eventData?.event?.name}</h3>
                    <hr className="h-[2px] bg-black mb-3"></hr>
                    <span className="flex gap-2">
                        <p>At:</p> <p>{eventData?.event?.place}</p>
                    </span>
                    <span className="flex gap-2">
                        <p>Location:</p> <p>{eventData?.event?.location}</p>
                    </span>

                    <span className="flex gap-2">
                        <p>Date:</p>{" "}
                        <p className="whitespace-pre">
                            {newStartDate} to{"  "}
                            {newEndDate}
                        </p>
                    </span>
                    <span className="flex gap-2">
                        <p>Time:</p>
                        <p className="whitespace-pre">
                            {eventData?.event?.startTime} - {eventData?.event?.endTime}
                        </p>
                    </span>
                </div>
                <div className="flex justify-center">
                    <img
                        src={eventData?.event?.url}
                        alt="events"
                        className=" h-[400px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewEvents;
