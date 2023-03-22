import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AboutUs } from "./AboutUs";
import { HomeEvents } from "./HomeEvents";
import { NewProducts } from "./newProducts";
import { FeaturedArtists } from "./FeaturedArtists";

const Home = () => {
    return (
        <>
            <img
                src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1677401708/assets/banner_urwns0.jpg"
                alt="banner"
                className="h-[80vh] w-[100%] object-cover mb-[30px]"
            />
            <NewProducts />
            <AboutUs />
            <FeaturedArtists />
            <HomeEvents />
        </>
    );
};

export default Home;
