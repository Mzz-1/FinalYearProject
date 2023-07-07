import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Heading2, Heading } from "../../components/Heading";
import { ExhibitionList } from "./ExhibitionList";
import { ArtistNavbar } from "../../components/ArtistNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchExhibition } from "../../redux-store/exhibitionSlice";
import { Loader } from "../../components/LoaderWrapper";

const ArtistExhibition = () => {
    const { id } = useParams();

    const links = [
        { itemName: "BIOGRAPHY", link: `/artist-profile/biography/${id}` },
        { itemName: "PORTFOLIO", link: `/artist-profile/portfolio/${id}` },
        { itemName: "EXHIBITION", link: `/artist-profile/exhibition/${id}` },
    ];

    const dispatch = useDispatch();

    const exhibition = useSelector((state) => state.exhibition);

    const { fetchStatus, data } = exhibition;

    useEffect(() => {
        dispatch(fetchExhibition({ id }));
    }, []);

    return (
        <div className=" max-w-[1340px] m-auto">
            <h2
                className=" text-[26px] font-cinzel mt-11 text-[#3C3737]"
                data-aos="fade-down"
            >
                Featured Exibitions
            </h2>

            <ArtistNavbar id={id} links={links}/>
            {fetchStatus !== "success" ? (
                <Loader/>
            ) : (
                <ExhibitionList exhibition={data.exhibitions} />
            )}
        </div>
    );
};

export default ArtistExhibition;
