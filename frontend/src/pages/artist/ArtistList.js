import { useNavigate } from "react-router-dom";

export const ArtistList = ({ artists }) => {
    const navigate = useNavigate();

    const getArtist = async (id) => {
        navigate(`/artist-profile/biography/${id}`);
    };

    return (
        <div className="grid grid-row-auto lg:grid-cols-3 sm:grid-cols-2 cursor-pointer justify-center items-center gap-[30px] my-[20px] ">
            {artists.map((artist) => {
                return (
                    <div
                        className="relative"
                        onClick={() => getArtist(artist._id)}
                        data-aos="fade-up"
                    >
                        <img
                            src={artist.profilePhoto}
                            className=" mb-[10px] w-[100%] h-[350px] object-cover m-auto"
                            alt="product"
                        />
                        <ul className="flex flex-col gap-[2px] relative px-[10px] py-[10px]">
                            <li className=" text-[22px] text-center font-cinzel flex items-center gap-4 justify-start text-[#65635F]">
                                {/* <hr className="w-[50px] h-[2px] bg-[#65635F] justify-self-start"></hr>{" "} */}
                                {artist.name}
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};
