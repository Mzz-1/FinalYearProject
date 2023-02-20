import WhiteButton from "./WhiteButton";

export const AboutUs = () => {
    return (
        <div className="h-[560px] bg-[#9F7E7E] text-[white] grid items-center justify-center">
            <h2 className="text-center">ABOUT US</h2>
            <div className="grid grid-rows-1 grid-cols-2 items-center justify-center gap-[150px]">
                <div className="flex items-center justify-center">
                    <img src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1676613644/assets/about_bfnndy.png" className="w-[450px] h-[450px] object-cover" alt="about" />
                </div>
                <div className="w-[500px] text-center">
                    <p>
                        At SimplyArt, we make it our mission to help you
                        discover and buy from the best emerging artists around
                        the world. Whether you’re looking to discover a new
                        artist, add a statement piece to your home, or looking
                        to discover new art events and exhibitions SimplyArt is
                        your portal to all those services. Join now and discover
                        thousands of original works by today’s top artists
                    </p>
                    <WhiteButton text="Discover Artists" />
                </div>
            </div>
        </div>
    );
};
