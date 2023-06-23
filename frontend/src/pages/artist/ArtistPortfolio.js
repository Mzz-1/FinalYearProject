import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Heading2, Heading, Heading1 } from "../../components/Heading";
import { ProductList } from "../store/ProductList";
import { ArtistNavbar } from "../../components/ArtistNavbar";

const ArtistPortfolio = () => {
    const [bio, setBio] = useState([]);
    const [portfolio, setPortfolio] = useState([]);

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
            const getPortfolio = async () => {
                const productsData = await axios.get(
                    `http://localhost:5000/api/products?artist=${bio.name}`
                );

                const data = await productsData.data.product;
                setPortfolio(data);
                console.log("portfolio", data);
            };
            getPortfolio();
        }
    }, [bio.name]);

    return (
        <div className=" max-w-[1340px] m-auto">
            <h2
                className=" text-[26px] font-slab mt-11 text-[#3C3737]"
                data-aos="fade-down"
            >
                Featured Works
            </h2>
            <ArtistNavbar id={id} />

            <ProductList products={portfolio} gridSize={1} type="gallery" />
        </div>
    );
};

export default ArtistPortfolio;
