import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { EventsList } from "../components/EventsList";

const Events = () => {
    const [events, setEvents] = useState([]);

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
        <div>
            <Navbar />
            <div className="bg-[#FAF9F6]">
                <h1>Ongoing Events</h1>

                <EventsList events={events} />
            </div>
            <Footer />
        </div>
    );
};

export default Events;
