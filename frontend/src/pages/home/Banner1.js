import { BlueButton } from "../../components/Button";
import { EventsSlideShow } from "../../components/EventsSlideShow";

const Banner1 = ({
    imgNum,
    img1,
    img2,
    width,
    bg,
    button,
    heading,
    para,
    paraWidth,
    color,
    headingColor,
}) => {
   
    return (
        <>
            <div
                className={`mb-[40px] bg-[antiquewhite] h-[70vh] grid grid-cols-2 items-center`}
            >
                <div className={`w-[${paraWidth}] m-auto`} data-aos="fade-right">
                    <h2 className={`text-[${headingColor}] font-semibold `}>
                        {heading}
                    </h2>
                    <p
                        className={`font-libre text-[60px] text-[${color}]  mb-6 `}
                    >
                        {para}
                    </p>
                    <BlueButton>{button}</BlueButton>
                
                </div>
                <div className={`grid grid-cols-${imgNum} ${img2 ? "": "m-auto"}`} data-aos="fade-left">
                    <img src={`${img1}`} className={`w-[${width}]`} alt="" />
                    {img2 ? (
                        <img
                            src={`${img2}`}
                            className={`w-[${width}]`}
                            alt=""
                        />
                    ) : (
                      ""
                    )}
                    {img1 || img2 ? (""): <EventsSlideShow/>}
                </div>
            </div>
        </>
    );
};

export default Banner1;
