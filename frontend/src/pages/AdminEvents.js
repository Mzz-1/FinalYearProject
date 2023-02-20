import { useState, useEffect } from "react";
import axios from "axios";
import { AdminEvent } from "../components/AdminEventsList";
import { AdminSidebar } from "../components/AdminSidebar"
import SplitScreen from "../components/SplitScreen"

const AdminEventPage = () => {
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
        <SplitScreen>
        <AdminSidebar/>
        <AdminEvent/>
    </SplitScreen>
    )
};

export default AdminEventPage;
