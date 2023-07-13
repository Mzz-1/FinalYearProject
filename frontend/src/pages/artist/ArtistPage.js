import { useEffect, useState } from "react";
import axios from "axios";
import { ArtistList } from "./ArtistList";
import { Banner } from "../../components/Banner";
import { useForm } from "react-hook-form";
import { Search } from "../../components/Search";
import { Heading, Heading1 } from "../../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllArtists } from "../../redux-store/artistSlice";
import { Loader } from "../../components/LoaderWrapper";

const ArtistPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Featured Artist'; 
      }, []);

    const { artist } = useSelector((state) => state);

    const { data, fetchStatus } = artist;

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
    } = useForm();

    const getArtists = async () => {
        const { searchItem } = getValues();

        dispatch(
            fetchAllArtists({ page: "", searchItem: searchItem, limit: "" })
        );
    };

    useEffect(() => {
        getArtists();
    }, []);

    // const handleLoadMore = async () => {
    //     const { searchItem } = getValues();
    //     setPage(page + 1);
    //     const artistData = await axios.get(
    //         `http://localhost:5000/api/artists?name=${searchItem}&page=${
    //             page + 1
    //         }`
    //     );
    //     const newData = await artistData.data.artist;
    //     setArtists([...artists, ...newData]);
    // };

    return (
        <div className="max-w-[1800px] m-auto px-[10%]">
            <div
                className="flex  justify-between items-center  "
                data-aos="fade-down"
            >
                <Heading1 color="black">Artists</Heading1>
                <Search
                    register={{
                        ...register("searchItem", {
                            required: "Please enter a product name.",
                        }),
                    }}
                    onClick={() => getArtists()}
                />
            </div>

            <div className="flex flex-col justify-center gap-[40px] max-w-[1440px] m-auto">
                <hr className="bg-[#65635F] " />
                {fetchStatus !== "success" ? (
                    <Loader />
                ) : data.artist.length > 0 ? (
                    <>
                        <ArtistList artists={data.artist} />
                        <ArtistList artists={data.artist} />
                        <ArtistList artists={data.artist} />
                        <ArtistList artists={data.artist} />
                    </>
                ) : (
                    <div className=" h-[50vh] flex items-center justify-center">
                    <Heading1> Artist Not Found.</Heading1>
                </div>
                )}
            </div>
        </div>
    );
};

export default ArtistPage;
