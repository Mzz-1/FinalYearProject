import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState, useEffect } from "react";
import axios from "axios";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useNavigate } from "react-router-dom";
import { Banner } from "../pages/home/Banner";

export const ProductSlideShow = () => {
    const options = {
        type: "loop",
        perPage: 1,
        perMove: 1,
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        pagination: false,
        arrows: true,
    };

    const navigate = useNavigate();

    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/products?limit=4`
        );

        const data = await productsData.data.product;
        setEvents(data);
        console.log("getEvents", data);
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <Splide options={options}>
            
                <SplideSlide key={events._id}>
                    {/* <img
                        className="h-[600px] w-full object-cover cursor-pointer"
                        src={events.url}
                        alt={events.title}
                        onClick={()=>navigate(`/product/${events._id}`)}
                    /> */}
                    <Banner/>
                </SplideSlide>
            
        </Splide>
    );
};
