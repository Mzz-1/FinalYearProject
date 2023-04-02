import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AboutUs } from "./AboutUs";
import { HomeEvents } from "./HomeEvents";
import { NewProducts } from "./newProducts";
import { FeaturedArtists } from "./FeaturedArtists";
import { ProductSlideShow } from "../../components/ProductsSlideshow";

const Home = () => {
    return (
        <>
            <div className="mb-[40px]">
               <ProductSlideShow/>
        
            </div>
            <NewProducts />
            <AboutUs />
            <FeaturedArtists />
            <HomeEvents />
        </>
    );
};

export default Home;
