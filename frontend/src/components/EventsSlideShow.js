import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState, useEffect } from "react";
import axios from "axios";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

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
                        className="h-[600px]"
                        src={events.url}
                        alt={events.title}
                    />
                </SplideSlide>
            ))}
        </Splide>
    );
};
