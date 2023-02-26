import {Navbar} from "../../components/Navbar";
import {Footer} from "../../components/Footer";
import { AboutUs } from "../../components/AboutUs";
import { HomeEvents } from "../../components/HomeEvents";
import { NewProducts } from "./newProducts";

const Home = () =>{
    return(
        <>
        <img src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1677401708/assets/banner_urwns0.jpg" alt="banner" className="h-[80vh] w-[100%] object-cover mb-[30px]"/>
        <NewProducts/>
        <AboutUs/>
        <HomeEvents/>
        
        </>
    )
}

export default Home