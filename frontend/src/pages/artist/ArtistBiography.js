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

const ArtistBiography = () => {
    const [bio, setBio] = useState([]);

    const today = new Date();
    const dateToday = today.toDateString();
    const { id } = useParams();

    const getBio = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/biography/${id}`
        );

        const data = await productsData.data.artist;
        setBio(data);
        console.log("getEvents", data);
    };

    useEffect(() => {
        getBio();
    }, []);

    return (
        <div className=" max-w-[1340px] m-auto ">
            <h2
                className=" text-[26px] font-slab mt-11 text-[#3C3737]"
                data-aos="fade-down"
            >
                Biography
            </h2>
            <ArtistNavbar id={id} />
            <div className="grid grid-row-auto grid-cols-2 bg-[] justify-center gap-[100px] ">
                <div className="relative w-[] h-[70%] m-auto flex flex-col gap-[50px]">
                    <div data-aos="fade-down">
                        <h2
                            className="text-[#9F7E7E] text-[26px] font-slab"
                            data-aos="fade-down"
                        >
                            About The Artist
                        </h2>

                        <h2
                            className="my-[30px] text-[38px] font-medium font-libre text-[#3C3737]"
                            data-aos="fade-down"
                        >
                            {bio.name}
                        </h2>
                        <hr></hr>

                        <div
                            className="h-[auto] w-[600px] mt-[20px] font-slab text-justify myHtmlStyles"
                            dangerouslySetInnerHTML={{ __html: bio.biography }}
                        />
                    </div>
                    <div className="" data-aos="fade-up">
                        <RiDoubleQuotesL size={50} />

                        <div
                            className="h-[auto] w-[600px] mt-[10px] font-libre text-[#3C3737] ml-4 text-justify myHtmlStyles"
                            dangerouslySetInnerHTML={{
                                __html: bio.aboutArtist,
                            }}
                        />
                        <RiDoubleQuotesR size={50} className="ml-auto" />
                    </div>
                </div>

                <div className=" h-[770px] flex items-center justify-center">
                    <img
                        src={bio.profilePhoto}
                        className=" mb-[10px] h-[700px] w-[500px] shadow-2xl object-cover"
                        data-aos="fade-left"
                        alt="product"
                    />
                </div>
            </div>
        </div>
    );
};

export default ArtistBiography;
