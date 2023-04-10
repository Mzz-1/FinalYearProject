import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../components/Product";
import { ArtistList } from "./ArtistList";
import { Banner } from "../../components/Banner";
import { useForm } from "react-hook-form";
import { Search } from "../../components/Search";

const ArtistPage = () => {
    const [artists, setArtists] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalArtists, setTotalArtists] = useState(0);

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
    } = useForm();

    const getArtists = async ({ searchItem = "" }) => {
        setLoading(true);
        const artistData = await axios.get(
            `http://localhost:5000/api/artists?name=${searchItem}&page=${page}`
        );

        const data = await artistData.data.artist;
        setArtists(data);
        setTotalArtists(artistData.data.total);
        setLoading(false);
        console.log("getArtists", data);
    };

    useEffect(() => {
        setPage(1);
        getArtists({});
    }, []);

    const handleLoadMore = async () => {
        const { searchItem } = getValues();
        setPage(page + 1);
        const artistData = await axios.get(
            `http://localhost:5000/api/artists?name=${searchItem}&page=${
                page + 1
            }`
        );
        const newData = await artistData.data.artist;
        setArtists([...artists, ...newData]);
    };

    return (
        <div className="bg-[#F4F4F2]  px-[10%]">
            <div className="max-w-[1440px] m-auto flex flex-col justify-between items-center">
                <Banner heading="Featured Artists" img="https://res.cloudinary.com/djuzpmqlp/image/upload/v1681142248/assets/Asymmetry_Painting_h0rit1.jpg"/>
                <div className="flex gap-[50px] justify-end items-center">
                <Search
                    register={{
                        ...register("searchItem", {
                            required: "Please enter a product name.",
                        }),
                    }}
                    onClick={() =>
                        getArtists({ searchItem: getValues("searchItem") })
                    }
                />
                </div>
            </div>

            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] m-auto">
                <ArtistList artists={artists} />
                {loading && <p>Loading...</p>}
                {!loading && artists.length < totalArtists && (
                    <button onClick={handleLoadMore}>Load More</button>
                )}
            </div>
        </div>
    );
};

export default ArtistPage;
