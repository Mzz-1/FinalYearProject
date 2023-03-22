import { useState, useEffect } from "react";
import axios from "axios";
import { ProductList } from "../store/ProductList";
import { Heading2 } from "../../components/Heading";
import { ArtistList } from "../artist/ArtistList";

export const FeaturedArtists = () => {
    const [artists, setArtists] = useState([]);

    const getArtists = async () => {
        const artistData = await axios.get(
            `http://localhost:5000/api/artists?limit=4`
        );

        const data = await artistData.data.artist;
        setArtists(data);
        console.log("getProducts", data);
    };

    useEffect(() => {
        getArtists();
    }, []);

    return (
        <div className="px-[250px] mt-[30px]">
            <Heading2 text="Featured Artists" />
            <div className="w-[500px] text-center m-auto">
                <hr className="h-[2.5px] bg-black my-[20px]" />
                <p>
                    Discover top creators around you. Explore each of their
                    artworks and find the designs you love from a wide range of
                    artworks.
                </p>
            </div>
            <ArtistList artists={artists} />
        </div>
    );
};
