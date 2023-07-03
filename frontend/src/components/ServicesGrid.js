import { Heading2 } from "./Heading";
import { ViewAllButton } from "./Button";
export const Services = ({ heading, para, img,button }) => {
    return (
        <div className="grid grid-cols-2 h-[75vh] items-center border-black border-y-[1px] divide-black divide-x-[1px]">
            <div className="flex flex-col justify-center items-center w-[60%] m-auto text-center ">
                <Heading2>{heading}</Heading2>
                <p className="font-montserrat mb-5">{para}</p>
                <ViewAllButton border="black" link="/register">
                  {button}
                </ViewAllButton>
            </div>
            <div className="h-full flex items-center">
                <img className="w-[95%]  m-auto" src={img} alt="" />
            </div>
        </div>
    );
};
