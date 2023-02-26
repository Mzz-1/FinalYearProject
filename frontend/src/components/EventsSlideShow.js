import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useState,useEffect } from 'react';
import axios from 'axios';
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

    useEffect(()=>{
      getEvents()
    },[])

    const slides = [
      {
        id: 1,
        title: "Slide 1",
        image: "https://res.cloudinary.com/djuzpmqlp/image/upload/v1676613644/assets/about_bfnndy.png",
      },
      {
        id: 2,
        title: "Slide 2",
        image: "https://res.cloudinary.com/djuzpmqlp/image/upload/v1676613644/assets/about_bfnndy.png",
      },
      {
        id: 3,
        title: "Slide 3",
        image: "https://res.cloudinary.com/djuzpmqlp/image/upload/v1676613644/assets/about_bfnndy.png",
      },
      {
        id: 4,
        title: "Slide 4",
        image: "https://via.placeholder.com/400x200",
      },
      {
        id: 5,
        title: "Slide 5",
        image: "https://via.placeholder.com/400x200",
      },
    ];
  
    return (
      <Splide options={options}>
        {events.map((events) => (
          <SplideSlide key={events._id}>
            <img className='w-[450px] h-[450px] object-cover' src={events.url} alt={events.title} />
          </SplideSlide>
        ))}
      </Splide>
    );
  };