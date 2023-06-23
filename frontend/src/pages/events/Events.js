import { useEffect, useState } from "react";
import axios from "axios";
import { EventsList } from "./EventsList";
import { Heading1 } from "../../components/Heading";
import { EventList } from "./EventList";

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
            <div className=" py-[30px]">
                <div className="max-w-[1400px] m-auto">
                    <Heading1>Exhibitions</Heading1>
                    <div className="flex gap-5 mt-10 items-center ">
                        <h3 className="text-[#3C3737] text-[18px] font-slab">
                            Current
                        </h3>
                        <hr className="  my-[20px] w-[100%] m-auto"></hr>
                    </div>

                    <EventList events={events} date="ongoing" />

                    <div className="flex gap-5 mt-10 items-center ">
                        <h3 className="text-[#3C3737] text-[18px] font-slab">
                            Upcomming
                        </h3>
                        <hr className="  my-[20px] w-[100%] m-auto"></hr>
                    </div>
                    <EventsList events={events} date="upcomming" />
                </div>
            </div>
        </>
    );
};

export default Events;
