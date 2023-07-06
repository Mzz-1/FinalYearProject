import Slider from "react-slick";
import { Product } from "./Product";
import { Artist } from "./Artist";
import { Event } from "./Event";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
    BsArrowDownRightCircle
} from "react-icons/bs";

export const Carousel = ({ products,artists,events }) => {
    const sliderSettings = {
        dots: true, // Show navigation dots
        infinite: true, // Enable infinite looping
      
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
       arrows:true,
        prevArrow: <BsArrowDownRightCircle size={32} style={{ backgroundColor: 'black', color: 'white' }}/>, // Custom previous arrow component
        nextArrow: <BsArrowDownRightCircle />, // Custom next arrow component
        draggable: false,
    };
    return (
        <div className="mb">
            <Slider {...sliderSettings}>
                {products && products.map((product) => {
                    return <Product product={product} type="carousel" />;
                })}
                {artists && artists.map((artist) => {
                    return <Artist artist={artist} type="carousel" />;
                })}
                {events && events.map((event) => {
                    return <Event events={event} type="carousel" />;
                })}
            </Slider>
        </div>
    );
};