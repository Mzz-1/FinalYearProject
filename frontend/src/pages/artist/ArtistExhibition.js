import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heading2, Heading } from "../../components/Heading";
import { ExhibitionList } from "./ExhibitionList";

const ArtistExhibition = () => {
    const [bio, setBio] = useState([]);
    const [exhibition, setExhibition] = useState([]);

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

    useEffect(() => {
        if (bio.name) {
            const getExhibition = async () => {
                const productsData = await axios.get(
                    `http://localhost:5000/api/artist-exhibitions/${bio.name}`
                );

                const data = await productsData.data.exhibitions;
                setExhibition(data);
                console.log("portfolio", data);
            };
            getExhibition();
        }
    }, [bio.name]);

    const links = [
        { itemName: "BIOGRAPHY", link: `/artist-profile/biography/${id}` },
        { itemName: "PORTFOLIO", link: `/artist-profile/portfolio/${id}` },
        { itemName: "EXHIBITION", link: `/artist-profile/exhibition/${id}` },
    ];

    return (
        <div className=" max-w-[1340px] m-auto">
            <h2 className="mt-[40px] text-[30px]">{bio.name}</h2>
            <div>
                <ul className="flex gap-[20px] text-[12px] justify-end my-[20px] ">
                    {links.map((link, i) => (
                        <li key={i} className="">
                            <Link to={link.link}>{link.itemName}</Link>
                        </li>
                    ))}
                </ul>
            </div>

                <ExhibitionList exhibition={exhibition}  />
            
        </div>
    );
};

export default ArtistExhibition;
