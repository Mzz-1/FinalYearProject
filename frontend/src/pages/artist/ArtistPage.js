import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../components/Product";
import { ArtistList } from "./ArtistList";
import { Banner } from "../../components/Banner";

import { Search } from "../../components/Search";

const ArtistPage = () => {
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
        <div className="bg-[#F4F4F2]  px-[10%]">
            <div className="flex justify-between items-center">
                <Banner heading="Featured Artists" />
                <Search />
            </div>

            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] m-auto">
                <ArtistList artists={artists} />
            </div>
        </div>
    );
};

export default ArtistPage;
