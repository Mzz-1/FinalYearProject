import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AboutUs } from "./AboutUs";
import { HomeEvents } from "./HomeEvents";
import { NewProducts } from "./newProducts";
import { FeaturedArtists } from "./FeaturedArtists";

const Home = () => {
    return (
        <>
            <div>
                <img
                    src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1679823816/artist%20events/wngsr0os6x7ojscnnuu5.jpg"
                    alt="banner"
                    className="h-[80vh] w-[100%] object-cover mb-[30px]"
                />
        
            </div>
            <NewProducts />
            <AboutUs />
            <FeaturedArtists />
            <HomeEvents />
        </>
    );
};

export default Home;
