import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ArtistList = ({ artists }) => {
    console.log(artists);

    const navigate = useNavigate();

    const getArtist = async (id) => {
        const productData = await axios.get(
            `http://localhost:5000/api/biography/${id}`
        );
        console.log(productData.data.product);

        navigate(`/artist-profile/biography/${id}`);
    };

    return (
        <div className="grid grid-row-auto grid-cols-3 bg-[] cursor-pointer justify-center items-center gap-[100px] my-[50px] ">
            {artists.map((artist) => {
                return (
                    <div
                        className="relative"
                        onClick={() => getArtist(artist._id)}
                    >
                        <img
                            src={artist.profilePhoto}
                            className=" mb-[10px] w-[300px] h-[350px] object-cover m-auto"
                            alt="product"
                        />
                        <ul className="flex flex-col gap-[2px] relative px-[10px] py-[10px]">
                            <li className="font-medium text-[18px] text-center">
                                {artist.name}
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};
