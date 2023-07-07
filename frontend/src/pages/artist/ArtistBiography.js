import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    Heading2,
    Heading,
    DashboardHeading,
    Heading1,
} from "../../components/Heading";
import { ArtistNavbar } from "../../components/ArtistNavbar";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistBio } from "../../redux-store/artistBioSlice";
import { Loader } from "../../components/LoaderWrapper";

const ArtistBiography = () => {
    const { id } = useParams();

    const links = [
        { itemName: "BIOGRAPHY", link: `/artist-profile/biography/${id}` },
        { itemName: "PORTFOLIO", link: `/artist-profile/portfolio/${id}` },
        { itemName: "EXHIBITION", link: `/artist-profile/exhibition/${id}` },
    ];

    const dispatch = useDispatch();

    const artistBio = useSelector((state) => state.artistBio);

    const { fetchStatus, data } = artistBio;

    const getBio = async () => {
        dispatch(fetchArtistBio({ id }));
    };

    useEffect(() => {
        getBio();
    }, []);

    return (
        <div className=" max-w-[1340px] m-auto ">
            <h2
                className=" text-[26px] font-cinzel mt-11 text-[#3C3737]"
                data-aos="fade-down"
            >
                Biography
            </h2>
            
            <ArtistNavbar id={id} links={links}/>
            {fetchStatus !== "success" ? (
                <Loader/>
            ) : (
                <div className="grid grid-row-auto grid-cols-2 bg-[] justify-center gap-[100px] ">
                    <div className="relative w-[] h-[70%] m-auto flex flex-col gap-[40px]">
                        <div data-aos="fade-down">
                            <h2
                                className="text-[#9F7E7E] text-[26px] font-playfair"
                                data-aos="fade-down"
                            >
                                About The Artist
                            </h2>

                            <h2
                                className="my-[30px] text-[38px] font-medium font-cinzel text-[#3C3737]"
                                data-aos="fade-down"
                            >
                                {data.artist.name}
                            </h2>
                            <hr></hr>

                            <div
                                className="h-[auto] w-[600px] mt-[20px] font-montserrat text-justify myHtmlStyles"
                                dangerouslySetInnerHTML={{
                                    __html: data.artist.biography,
                                }}
                            />
                        </div>
                        <div className="" data-aos="fade-up">
                            <RiDoubleQuotesL size={50} />

                            <div
                                className="h-[auto] w-[600px] mt-[10px] font-playfair text-[#3C3737] ml-4 text-justify myHtmlStyles"
                                dangerouslySetInnerHTML={{
                                    __html: data.artist.aboutArtist,
                                }}
                            />
                            <RiDoubleQuotesR size={50} className="ml-auto" />
                        </div>
                    </div>

                    <div className=" h-[770px] flex items-center justify-center">
                        <img
                            src={data.artist.profilePhoto}
                            className=" mb-[10px] h-[700px] w-[500px] shadow-2xl object-cover"
                            data-aos="fade-left"
                            alt="product"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtistBiography;
