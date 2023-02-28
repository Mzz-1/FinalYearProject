import { useEffect, useState } from "react";
import axios from "axios";
import { EventsList } from "./EventsList";
import { Heading } from "../../components/Heading";

const Events = () => {
    const [events, setEvents] = useState([]);

    const today = new Date();
    const dateToday = today.toDateString();

    const getEvents = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/events`
        );

        const data = await productsData.data.event;
        setEvents(data);
        console.log("getEvents", data);
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
        
            <div className="bg-[#FAF9F6]">
                <div className="max-w-[1400px] m-auto">
                    <Heading text="Ongoing Events" />
                    <EventsList events={events} date="ongoing" />
                    <hr className="bg-black h-[2px]"></hr>
                    <Heading text="Upcomming Events" />
                    <EventsList events={events} date="upcomming" />
                </div>
            </div>
           
        </>
    );
};

export default Events;
