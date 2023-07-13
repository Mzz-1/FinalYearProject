import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Heading2, Heading, Heading1 } from "../../components/Heading";
import { ProductList } from "../store/ProductList";
import { ArtistNavbar } from "../../components/ArtistNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistProduct } from "../../redux-store/artistProductSlice";
import { fetchArtistBio } from "../../redux-store/artistBioSlice";
import { Loader } from "../../components/LoaderWrapper";

const ArtistPortfolio = () => {
    const [bio, setBio] = useState([]);

    const dispatch = useDispatch();

    const artistProduct = useSelector((state) => state.artistProduct);

    const artistBio = useSelector((state) => state.artistBio);

    const { fetchStatus:bioStatus, data:bioData } = artistBio;

    const { fetchStatus, data } = artistProduct;

    const { id } = useParams();

    const links = [
        { itemName: "BIOGRAPHY", link: `/artist-profile/biography/${id}` },
        { itemName: "PORTFOLIO", link: `/artist-profile/portfolio/${id}` },
        { itemName: "EXHIBITION", link: `/artist-profile/exhibition/${id}` },
    ];

    const getBio = async () => {
        dispatch(fetchArtistBio({ id }));
       
    };

    useEffect(() => {
        getBio();
        
    }, []);


    useEffect(() => {
        const name = bioData.artist.name;
        dispatch(fetchArtistProduct({ name }));
        const pageTitle = bioData.artist.name + " - Works | SimplyArt"
        document.title = pageTitle; 
    }, [bio.name]);

    return (
        <div className=" max-w-[1340px] m-auto">
            <h2
                className=" text-[26px] font-cinzel mt-11 text-[#3C3737]"
                data-aos="fade-down"
            >
                Featured Works
            </h2>
            <ArtistNavbar id={id} links={links} />
            {fetchStatus !== "success" ? (
                <Loader/>
            ) : (
                <ProductList
                    products={data.product}
                    gridSize={1}
                    type={"gallery"}
                />
            )}
        </div>
    );
};

export default ArtistPortfolio;
