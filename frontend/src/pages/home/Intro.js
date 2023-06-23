import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AboutUs } from "./AboutUs";
import { HomeEvents } from "./HomeEvents";
import { NewProducts } from "./newProducts";
import { FeaturedArtists } from "./FeaturedArtists";
import { ProductSlideShow } from "../../components/ProductsSlideshow";
import { Banner } from "./Banner";
import { BlueButton } from "../../components/Button";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Intro = (imgNum, img1, img2, width, bg, button) => {
    return (
        <>
            <div className="mb-[40px] bg-[#4d4d57] h-[65vh] grid grid-cols-2 items-center">
                <div className="w-[450px] m-auto" data-aos="fade-right">
                    <h2 className="text-[#79bdc9] font-semibold">ART LOVER?</h2>
                    <p className="font-libre text-[60px] text-[#fefefe] mb-6">
                        You came to the right place!
                    </p>
                    <BlueButton>BROWSE ARTWORKS</BlueButton>
                </div>
                <div className="grid grid-cols-2">
                    <img
                        src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1687107016/assets/intro2_lic3eu.jpg"
                        className="w-[300px]"
                        alt=""
                        data-aos="fade-left"
                    />
                    <img
                        src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1687107013/assets/intro1_z0brj3.jpg"
                        className="w-[300px]"
                        alt=""
                        data-aos="fade-left"
                    />
                </div>
            </div>
        </>
    );
};

export default Intro;
