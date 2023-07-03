import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Heading2, Heading, Heading1 } from "../../components/Heading";
import { ProductList } from "../store/ProductList";
import { ArtistNavbar } from "../../components/ArtistNavbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistProduct } from "../../redux-store/artistProductSlice";
import { Loader } from "../../components/LoaderWrapper";

const ArtistPortfolio = () => {
    const [bio, setBio] = useState([]);

    const dispatch = useDispatch();

    const artistProduct = useSelector((state) => state.artistProduct);

    const { fetchStatus, data } = artistProduct;

    const { id } = useParams();

    const getBio = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/biography/${id}`
        );
        const data = await productsData.data.artist;
        setBio(data);
    };

    useEffect(() => {
        getBio();
    }, []);

    useEffect(() => {
        const name = bio.name;
        dispatch(fetchArtistProduct({ name }));
    }, [bio.name]);

    return (
        <div className=" max-w-[1340px] m-auto">
            <h2
                className=" text-[26px] font-cinzel mt-11 text-[#3C3737]"
                data-aos="fade-down"
            >
                Featured Works
            </h2>
            <ArtistNavbar id={id} />
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
