import { useState, useEffect } from "react";
import axios from "axios";
import { ProductList } from "../store/ProductList";
import { Heading2 } from "../../components/Heading";
import { ArtistList } from "../artist/ArtistList";
import { BlackButton, BrownButton } from "../../components/Button";
import { fetchAllArtists } from "../../store/artistSlice";
import { useDispatch, useSelector } from "react-redux";

export const FeaturedArtists = () => {
    const dispatch = useDispatch();

    const { artist } = useSelector((state) => state);

    const { data, fetchStatus } = artist;
    const getArtists = async () => {
        dispatch(fetchAllArtists({ limit: 3,searchItem:"",page:"" }));
      
    };

    console.log("aaa",data)

    useEffect(() => {
        getArtists();
    }, [dispatch]);

    return (
        <div className="px-[250px] mt-[30px] text-center">
            <Heading2>Featured Artists</Heading2>
            <div className="w-[500px] text-center m-auto">
                {/* <hr className="h-[2.5px] bg-black my-[20px]" /> */}
                <p className="font-slab mt-5">
                    Discover top creators around you. Explore each of their
                    artworks and find the designs you love from a wide range of
                    artworks.
                </p>
            </div>
            {fetchStatus !== "success" ? (
                "loading..."
            ) : (
                <ArtistList artists={data.artist} />
            )}

            <BlackButton>View Artists</BlackButton>
        </div>
    );
};
