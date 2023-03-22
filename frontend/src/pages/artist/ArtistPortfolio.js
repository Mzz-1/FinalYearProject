import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Heading2, Heading } from "../../components/Heading";

const ArtistPortfolio = () => {
    const [bio, setBio] = useState([]);

    const today = new Date();
    const dateToday = today.toDateString();
    const { id } = useParams();

    const getBio = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/biography/${id}`
        );

        const data = await productsData.data.bio;
        setBio(data);
        console.log("getEvents", data);
    };

    useEffect(() => {
        getBio();
    }, []);

    return (
        <div className="">
            <h2 className="mt-[40px] ml-[5%]">{bio.name}</h2>
            <div className="grid grid-row-auto grid-cols-2 bg-[] justify-center gap-[100px] px-[50px]">
                <div className="relative w-[90%] h-[70%] m-auto flex flex-col gap-[50px]">
                    <div>
                        {" "}
                        <Heading2 text="Biography" /> {bio.biography}
                    </div>
                    <div>
                        {" "}
                        <Heading2 text="Artist Statement" /> {bio.aboutArtist}
                    </div>
                </div>

                <div className=" h-[770px] flex items-center justify-center">
                    <img
                        src={bio.profilePhoto}
                        className=" mb-[10px] h-[90%] shadow-2xl object-cover"
                        alt="product"
                    />
                </div>
            </div>
        </div>
    );
};

export default ArtistPortfolio;
