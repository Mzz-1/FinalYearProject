import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState, useEffect } from "react";
import axios from "axios";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Heading1,Heading } from "./Heading";

export const EventsSlideShow = () => {
    const options = {
        type: "loop",
        perPage: 1,
        perMove: 1,
        gap: "1rem",
        autoplay: true,
        pauseOnHover: false,
        pagination: false,
        arrows: false,
    };

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
        <Splide options={options}>
            {events.map((events) => (
                <SplideSlide key={events._id}>
                    <img
                        className="h-[55vh] m-auto "
                        src={events.url}
                        alt={events.title}
                    />
                    <div className="text-center mt-2"><Heading1>{events.name}</Heading1>
                    <hr className="h-[2px] bg-[#0a0a0a] w-[300px] m-auto my-[2px]"></hr>
                    <p className="font-slab">{events.location}</p>
                    </div>
                    
                </SplideSlide>
            ))}
        </Splide>
    );
};
