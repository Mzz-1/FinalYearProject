import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ViewAllButton } from "./Button";

export const Artist = ({ artist, type }) => {
    const navigate = useNavigate();

    const getArtist = async (id) => {
        navigate(`/artist-profile/biography/${id}`);
    };
    return (
        <div
            className={`relative cursor-pointer 
        ${type === "carousel" ? "mx-5" : ""} `}
            onClick={() => getArtist(artist._id)}
            data-aos="fade-up"
        >
            <img
                src={artist.profilePhoto}
                className=" mb-[10px] w-[100%] h-[450px] object-cover m-auto rounded-xl"
                alt="product"
            />
            <ul className="flex flex-col gap-[2px] relative px-[10px] py-[10px] font-montserrat">
                <li className=" text-[34px] font-cinzel flex  gap-4  mb-4 text-[#65635F]">
                    {/* <hr className="w-[50px] h-[2px] bg-[#65635F] justify-self-start"></hr>{" "} */}
                    {artist.name}
                </li>
                <li>
                <div
                                className="mb-4  text-[#3C3737]  text-justify myHtmlStyles"
                                dangerouslySetInnerHTML={{
                                    __html: artist.aboutArtist,
                                }}
                            />
                </li>
                <li><ViewAllButton border="black" link={`/artist-profile/biography/${artist._id}`} align="left">View Artist</ViewAllButton> </li>
            </ul>
        </div>
    );
};
