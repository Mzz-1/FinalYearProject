import { useState, useEffect } from "react";
import axios from "axios";

const AdminEvent = () => {
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
    return <div></div>;
};

export default AdminEvent;
