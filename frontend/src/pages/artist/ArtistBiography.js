import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heading2, Heading } from "../../components/Heading";

const ArtistBiography = () => {
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

    const links=[ { itemName: "BIOGRAPHY", link: `/artist-profile/biography/${id}` },
    { itemName: "PORTFOLIO", link: `/artist-profile/portfolio/${id}` },
    { itemName: "EXHIBITION", link: `/artist-profile/exhibition/${id}` },
   ]

    return (
        <div className=" max-w-[1340px] m-auto">
        <h2 className="mt-[40px] text-[30px]">{bio.name}</h2>
            <div><ul className="flex gap-[20px] text-[12px] justify-end">
               {links.map((link,i)=>(
                <li key={i} className="">
                <Link to={link.link}>{link.itemName}</Link>
            </li>
               ))}
                </ul></div>
            <div className="grid grid-row-auto grid-cols-2 bg-[] justify-center gap-[100px] ">
                <div className="relative w-[] h-[70%] m-auto flex flex-col gap-[50px]">
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
                        className=" mb-[10px] h-[650px] w-[600px] shadow-2xl object-cover"
                        alt="product"
                    />
                </div>
            </div>
        </div>
    );
};

export default ArtistBiography;
