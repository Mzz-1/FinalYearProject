import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AboutUs } from "./AboutUs";
import { HomeEvents } from "./HomeEvents";
import { NewProducts } from "./newProducts";
import { FeaturedArtists } from "./FeaturedArtists";
import { ProductSlideShow } from "../../components/ProductsSlideshow";
import { Banner } from "./Banner";
import Banner1 from "./Banner1";
import Intro from "./Intro";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    },[]);
    return (
        <>
            <Intro />
            <NewProducts />

            <Banner1
                imgNum={1}
                bg="antiquewhite"
                button="Get Started"
                heading="ARE YOU AN ARTIST?"
                headingColor="#aaaaa8"
                para="Create Your Own Portfolio Today!"
                paraWidth="500px"
                color="#404048"
                width="600px"
                img1="https://res.cloudinary.com/djuzpmqlp/image/upload/v1687111060/assets/create3_i1zzjv.jpg"
            />

            <FeaturedArtists />
            
            <Banner1
                imgNum={1}
                bg="antiquewhite"
                button="Explore Events"
                heading="INTERESTED IN ART EVENTS?"
                headingColor="#aaaaa8"
                para="Discover ongoing and upcomming exibitions!"
                paraWidth="500px"
                color="#404048"
                width="600px"
              
            />
            
          
        </>
    );
};

export default Home;
