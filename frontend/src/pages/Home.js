import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import { AboutUs } from "../components/AboutUs";
import { HomeEvents } from "../components/HomeEvents";

const Home = () =>{
    return(
        <>
        <Navbar />
        <AboutUs/>
        <HomeEvents/>
        <Footer/>
        </>
    )
}

export default Home