import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

export const ArtistList = ({ artists }) => {

    const navigate = useNavigate();

    const getArtist = async (id) => {
        const productData = await axios.get(
            `http://localhost:5000/api/biography/${id}`
        );
        console.log(productData.data.product);

        navigate(`/artist-profile/biography/${id}`);
    };

    return (
        <div className="grid grid-row-auto grid-cols-3 bg-[] cursor-pointer justify-center items-center gap-[100px] my-[20px] ">
            {artists.map((artist) => {
                return (
                    <div
                        className="relative"
                        onClick={() => getArtist(artist._id)}
                        data-aos="fade-up"
                    >
                        <img
                            src={artist.profilePhoto}
                            className=" mb-[10px] w-[100%] h-[450px] object-cover m-auto"
                            alt="product"
                        />
                        <ul className="flex flex-col gap-[2px] relative px-[10px] py-[10px]">
                            <li className=" text-[22px] text-center font-libre flex items-center gap-4 justify-center text-[#65635F]">
                                <hr className="w-[50px] h-[2px] bg-[#65635F] justify-self-start"></hr>{" "}
                                {artist.name}
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};
