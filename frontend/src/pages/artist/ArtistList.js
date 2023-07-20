import { useNavigate } from "react-router-dom";
import { Artist } from "../../components/Artist";
export const ArtistList = ({ artists }) => {
    const navigate = useNavigate();

    const getArtist = async (id) => {
        navigate(`/artist-profile/biography/${id}`);
    };

    return (
        <div className="grid grid-row-auto lg:grid-cols-3 grid-cols-2 cursor-pointer justify-center sm:items-center gap-4 sm:gap-[30px] my-[20px] ">
            {artists.map((artist) => {
               
                return (
                    <Artist artist={artist}/>
                );
            })}
        </div>
    );
};
