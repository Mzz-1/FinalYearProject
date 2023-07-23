import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArtistNavbar } from "../../components/ArtistNavbar";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchArtistBio } from "../../redux-store/artistBioSlice";
import { Loader } from "../../components/LoaderWrapper";

const ArtistBiography = () => {
    const { id } = useParams();

    const links = [
        { itemName: "BIOGRAPHY", link: `/artist-profile/biography/${id}` },
        { itemName: "PORTFOLIO", link: `/artist-profile/portfolio/${id}` },
        { itemName: "EXHIBITION", link: `/artist-profile/exhibition/${id}` },
    ];

    const dispatch = useDispatch();

    const artistBio = useSelector((state) => state.artistBio);

    const { fetchStatus, data } = artistBio;

    useEffect(() => {
        dispatch(fetchArtistBio({ id }));
        const pageTitle =
            data?.artist?.name + " -About Artist | Featured Artist";
        document.title = pageTitle;
    }, [dispatch,id,data?.artist?.name]);

    useEffect(() => {}, [data]);

    return (
        <div className=" max-w-[1340px] m-auto lg:px-6">
            <div className="flex flex-col-reverse mt-6">
                <h2
                    className=" text-[26px] font-cinzel px-5 mt-6 md:mt-11 text-[#3C3737]"
                    data-aos="fade-down"
                >
                    Biography
                </h2>
                <ArtistNavbar id={id} links={links} />
            </div>
            {fetchStatus === "success" ? (
                <div className="grid grid-row-auto lg:grid-cols-2 sm:grid-cols-1 bg-[] px-5 justify-center xl:gap-[100px] lg:gap-10 sm:gap-0 ">
                <div className="relative lg:w-[100%] lg:h-[70%] m-auto flex flex-col xl:gap-[40px] lg:gap-[20px] order-2 sm:h-auto sm:mb-8">
                    <div data-aos="fade-down">
                        <h2
                            className="text-[#9F7E7E] text-[20px] lg:text-[26px] font-playfair"
                            data-aos="fade-down"
                        >
                            About The Artist
                        </h2>

                        <h2
                            className="xl:my-[30px] lg:my-[15px] text-[25px] lg:text-[38px] font-medium font-cinzel text-[#3C3737]"
                            data-aos="fade-down"
                        >
                            {data?.artist.name}
                        </h2>
                        <hr></hr>

                        <div
                            className="h-[auto] md:w-[600px] text-[14px] lg:w-[100%] my-[20px] font-montserrat text-justify myHtmlStyles"
                            dangerouslySetInnerHTML={{
                                __html: data?.artist.biography,
                            }}
                        />
                    </div>
                    <div className="px-5" data-aos="fade-up">
                        <RiDoubleQuotesL size={50} />

                        <div
                            className="h-[auto] md:w-[600px] w-[100%] my-[10px] font-playfair text-[#3C3737] md:ml-4 text-justify myHtmlStyles"
                            dangerouslySetInnerHTML={{
                                __html: data?.artist.aboutArtist,
                            }}
                        />
                        <RiDoubleQuotesR size={50} className="ml-auto" />
                    </div>
                </div>

                <div className=" md:h-[770px] flex items-center justify-center py-7 order-1 lg:order-3 ">
                    <img
                        src={data?.artist.profilePhoto}
                        className=" lg:mb-[10px] h-[400px] md:h-[700px] md:w-[500px] shadow-2xl object-cover rounded-lg lg:w-[100%] lg:h-[80%]"
                        data-aos="fade-left"
                        alt="product"
                    />
                </div>
            </div>
              
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default ArtistBiography;
