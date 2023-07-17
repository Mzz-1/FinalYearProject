import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AboutUs } from "./AboutUs";
import { HomeEvents } from "./HomeEvents";
import { NewProducts } from "./newProducts";
import { FeaturedArtists } from "./FeaturedArtists";
import { ProductSlideShow } from "../../components/ProductsSlideshow";
import { Banner } from "./Banner";
import Banner1 from "./Banner1";
import { Banner2 } from "../../components/Banner2";
import { Services } from "../../components/ServicesGrid";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = 'SimplyArt - Explore Artworks, Events and Artists'; 
      }, []);
       
    return (
        <>
            <Banner2 />
            {/* <Banner1
                imgNum={2}
                bg="antiquewhite"
                button="View Artworks"
                heading="ART LOVER?"
                headingColor="#aaaaa8"
                para="You came to the right place!"
                paraWidth="500px"
                color="#404048"
                width="300px"
                img1="https://res.cloudinary.com/djuzpmqlp/image/upload/v1687107016/assets/intro2_lic3eu.jpg"
                img2="https://res.cloudinary.com/djuzpmqlp/image/upload/v1687107013/assets/intro1_z0brj3.jpg"
               
            /> */}
            <NewProducts />

            {/* <Banner1
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
            /> */}
            <br />
        
           
            <AboutUs />
            <HomeEvents />
            <Services
                heading="For Artists"
                para="Showcase, sell, and connect. Display your portfolio, feature exhibitions, and sell your artwork. Engage with a vibrant artist community and seize exciting opportunities. Join us and elevate your artistry."
                img="https://res.cloudinary.com/djuzpmqlp/image/upload/v1688373594/assets/frankie-cordoba-fPYJeMmYWM4-unsplash_dno2kd.jpg"
                button="Get Started"
            />
            <Services
                heading="For Individuals"
                para="Discover, connect, and be inspired. Browse artist products, explore portfolios, and stay notified about art events. Engage with a vibrant community of fellow art enthusiasts. Join us and unlock the world of art."
                img="https://res.cloudinary.com/djuzpmqlp/image/upload/v1688291397/assets/abbie-bernet-04X58d_hHv8-unsplash_w1mh2i.jpg"
                button="Sign Up"
            />
          
            <br />
            <FeaturedArtists />
            {/* <hr className="h-[2px] bg-black"></hr> */}

          
           
            {/* <Banner1
                imgNum={1}
                bg="antiquewhite"
                button="Explore Events"
                heading="INTERESTED IN ART EVENTS?"
                headingColor="#aaaaa8"
                para="Discover ongoing and upcomming exibitions!"
                paraWidth="500px"
                color="#404048"
                width="600px"
            /> */}
        </>
    );
};

export default Home;
