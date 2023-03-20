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
        
            <div className="bg-[#f7f4ed] py-[30px]">
                <div className="max-w-[1400px] m-auto">
                    <Heading text="Ongoing Events" />
                    <hr className="bg-black h-[2px] my-[20px]"></hr>
                    <EventsList events={events} date="ongoing" />
                   
                    <Heading text="Upcomming Events" />
                    <hr className="bg-black h-[2px] my-[20px]"></hr>
                    <EventsList events={events} date="upcomming" />
                </div>
            </div>
           
        </>
    );
};

export default Events;
