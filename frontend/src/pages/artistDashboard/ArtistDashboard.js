import axios from "axios";
import { Box } from "../../components/DashboardBox";
import { AdminHeading, Heading2 } from "../../components/Heading";
import { useUser } from "../../service/useUser";
import { useState,useEffect } from "react";

const ArtistDashboard = () => {
    const user = useUser();
    const [name,setName] =useState("")
    const [totalProducts,setTotalProducts] =useState("")
    const [totalEvents,setTotalEvents] =useState("")
    const [totalOrders,setTotalOrders] =useState("")

    const getBio = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/biography/${user.id}`
        );

        const data = await productsData.data.artist;
     setName(data.name)
        console.log("getBio", data);
    };

    const getProducts = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/artist-products/${name}`
        );

        const data = await productsData.data.product;
        setTotalProducts(data.length)
        console.log("products", data);
     
    };

    const getEvents = async () => {
        const exhibitionsData = await axios.get(
            `http://localhost:5000/api/artist-exhibitions/${user.id}`
        );

        const data = await exhibitionsData.data.exhibitions;
        setTotalEvents(data.length);
        console.log("getEvents", data);
    };

    useEffect(()=>{
        getBio()
        getEvents()
    },[]
    )

    useEffect(()=>{
        getProducts()
        
    },[name]
    )

    return (
        <>
            
            <Heading2>Dashboard</Heading2>
            <div className="grid grid-cols-3 grid-rows-2 gap-11 justify-center mt-9">
                <Box number={totalProducts}>Total Products</Box>
                <Box number={totalProducts}>Total Orders</Box>
                <Box number={totalEvents}>Total Events</Box>
               
            </div>
        </>
    );
};

export default ArtistDashboard;
