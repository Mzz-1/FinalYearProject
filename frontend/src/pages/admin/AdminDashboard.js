import axios from "axios";
import { Box } from "../../components/DashboardBox";
import { AdminHeading } from "../../components/Heading";
import { useUser } from "../../service/useUser";
import { useState, useEffect } from "react";

const AdminDashboard = () => {
    const user = useUser();
    const [totalAmount, setTotalAmount] = useState();
    const [totalArtist, setTotalArtist] = useState("");
    const [totalEvents, setTotalEvents] = useState();
    const [totalUser, setTotalUser] = useState();


    const getUsers = async () => {
        const userData = await axios.get(
            `http://localhost:5000/api/users?role=${"user"}`
        );

        const data = await userData.data.users;
        setTotalUser(data.length);
        console.log("getEvents", data);
    };

    const getArtists = async () => {
        const userData = await axios.get(
            `http://localhost:5000/api/users?role=${"artist"}`
        );

        const data = await userData.data.users;
        setTotalArtist(data.length);
        console.log("getEvents", data);
    };

    const getEvents = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/events`
        );

        const data = await productsData.data.event;
        setTotalEvents(data.length);
        console.log("getEvents", data);
    };

    const getOrders = async () => {
        const orderData = await axios.get(`http://localhost:5000/api/orders`);

        const data = await orderData.data.order;

        let totalAmount = 0;

        data.forEach((order) => {
            totalAmount += order.total;
        });
        setTotalEvents(data.length);
        setTotalAmount(totalAmount);
        console.log("order", data);
    };

    useEffect(() => {
        getUsers();
        getEvents();
        getArtists();
        getOrders();
    }, []);

    return (
        <>
            <AdminHeading>Dashboard</AdminHeading>
            <div className="grid grid-cols-3 justify-center mt-9 gap-11">
                <Box number={totalUser}>Total Users</Box>
                <Box number={totalArtist}>Total Artists</Box>
                <Box number={totalEvents}>Total Events</Box>
                <Box number={totalEvents}>Total Orders</Box>
                <div className="h-[300px] w-[650px] bg-[#29CC97] shadow-xl text-white text-center rounded-[10px] m-auto col-span-2">
                    <h3 className="text-[30px] mt-7">Total Transaction</h3>
                    <p className="text-[80px] mt-5">{totalAmount}</p>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
