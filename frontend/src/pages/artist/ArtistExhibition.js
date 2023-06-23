import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heading2, Heading } from "../../components/Heading";
import { ExhibitionList } from "./ExhibitionList";
import { ArtistNavbar } from "../../components/ArtistNavbar";

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

        const data = await productsData.data.artist;
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

    return (
        <div className=" max-w-[1340px] m-auto">
            <h2 className="mt-[40px] text-[30px] text-[#9F7E7E]">{bio.name}</h2>
            
            <ArtistNavbar id={id}/>

            <ExhibitionList exhibition={exhibition} />
        </div>
    );
};

export default ArtistExhibition;
