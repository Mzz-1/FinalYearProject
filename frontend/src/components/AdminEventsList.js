import { useState, useEffect } from "react";
import axios from "axios";
import { AdminHeading, AdminHeading2 } from "./AdminHeading";
import { useNavigate } from "react-router-dom";

export const AdminEvent = () => {
    const [events, setEvents] = useState([]);

    const navigate = useNavigate()

    const getEvents = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/events`
        );

        const data = await productsData.data.event;
        setEvents(data);
        console.log("getEvents", data);
    };

    const deleteEvent = async (id) => {
        const deleteData = await axios.delete(
            `http://localhost:5000/api/events/${id}`
        );
        getEvents();
    };



    useEffect(() => {
        getEvents();
    }, []);

    const dateOptions = { day: "numeric", month: "long", year: "numeric" }

    return (
        <div className="flex flex-col gap-[40px] h-[100%]">
            <AdminHeading text="Events" />
            <div className="flex flex-col gap-[20px] border rounded-[10px] h-[90%]  py-[30px] px-[20px] bg-white">
                <AdminHeading2 text="All Events"/>
                <table className="h-[] w-[100%] text-[#252733]">
                    <thead className="text-left ">
                        <tr>
                            <th>SN</th>
                            <th>Event Name</th>
                            <th>Place</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((events,index) => {
                            var startDateTime = new Date(events.startDate);
                            const newStartDate = startDateTime.toLocaleDateString(
                                "en-US",
                                dateOptions
                            );
        
                            var endDateTime = new Date(events.endDate);
                            const newEndDate = endDateTime.toLocaleDateString(
                                "en-US",
                                dateOptions
                            );
                            return (
                                <tr className="border-b divide-slate-400/25 h-[60px] ">
                                    <td>{index+1}</td>
                                    <td>{events.name}</td>
                                    <td>{events.place}</td>
                                    <td>{newStartDate}</td>
                                    <td>{newEndDate}</td>
                                    <td>
                                        <button >Edit</button>
                                        <button
                                            onClick={() =>
                                                deleteEvent(events._id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
