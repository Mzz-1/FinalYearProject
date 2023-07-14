import { ViewAllButton } from "../components/Button";
import { useEffect } from "react";
const Page404 = ({error}) => {
    useEffect(()=>{
        document.title = "404 Error | Page not found"; 

    },[])
    return (
        <div className="w-full h-[75vh] text-center flex justify-center bg-black">
            <img
                src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1686748810/assets/53932_hkicfr.jpg"
                className="w-full h-[100%] object-cover opacity-70"
                alt=""
            />
            <div className="h-[400px] w-[50vw] font-cinzel text-[55px] text-[#fefefe] absolute top-[25%]">
                <h2 className="border-[#fefefe] border-b-2">{error==="notAuthorized" ? "Not Authorized" : "Whoops... "}</h2>
                
                <p >{error==="notAuthorized" ? "You are not authorized to view this page" : "the page you are looking for does not exist."}</p>
                <ViewAllButton align="center" link="/">Go Back Home</ViewAllButton>
            </div>
        </div>
    );
};

export default Page404;
