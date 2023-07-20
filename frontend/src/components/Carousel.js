import { Product } from "./Product";
import { Artist } from "./Artist";
import { Event } from "./Event";
import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import "../styles/dots.css"

export const Carousel = ({ products,artists,events }) => {
  
    const carouselRef = useRef(null);

    useEffect(() => {
      // Initialize Flickity carousel
      const flickity = new Flickity(carouselRef.current, {
        cellAlign: 'center',
        wrapAround: true,
        draggable:false,
        prevNextButtons: true, // Show navigation arrows
      pageDots: true,
      });
  
      // Clean up the Flickity instance when the component is unmounted
     
    }, []);
  
    return (
        <div ref={carouselRef} className="carousel mb-12">
          
                {products && products.map((product) => {
                    return <Product product={product} type="carousel" />;
                })}
                {artists && artists.map((artist) => {
                    return <Artist artist={artist} type="carousel" />;
                })}
                {events && events.map((event) => {
                    return <Event events={event} type="carousel" />;
                })}
           
        </div>
    );
};
