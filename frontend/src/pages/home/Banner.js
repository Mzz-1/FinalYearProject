
import { BlackRButton } from "../../components/Button";

export const Banner = (heading,paragraph,button,alignment) => {
   
    return (
        <div className="grid grid-cols-2 bg-[#d8eaa7] w-[100%] h-[65vh] m-auto">
            <div className="w-[80%] text-center m-auto">
                <h2 className=" text-[40px] font-libre mb-5 font-semibold">
                    Resources for Artists, Galleries and Collectors
                </h2>
                <p className="font-roboto mb-5 ">
                    Discover and connect with a dynamic community of artists,
                    galleries, and collectors on our platform. Explore
                    captivating artworks, gain valuable insights, and forge
                    meaningful connections. Unleash the power of art with us.
                </p>
                <BlackRButton>Sign Up Now</BlackRButton>
            </div>
            <div className=" ">
                <img src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1686748845/assets/mayur-deshpande-zZPeoLxLRyM-unsplash_jqnfot.jpg" className=" h-[65vh] w-full"/>{" "}
            </div>
        </div>
    );
};
