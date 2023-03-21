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
            <ArtistList artists={artists} />
        </div>
    );
};
