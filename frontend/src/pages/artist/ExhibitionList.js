import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ExhibitionList = ({ exhibition }) => {
    const dateOptions = { day: "numeric", month: "long", year: "numeric" };
    return (
        <div className="grid grid-row-auto grid-cols-3 bg-[] justify-center items-center gap-[80px] my-[50px] ">
            {exhibition.map((exhibition) => {
                var startDateTime = new Date(exhibition.startDate);
                const newStartDate = startDateTime.toLocaleDateString(
                    "en-US",
                    dateOptions
                );

                var endDateTime = new Date(exhibition.endDate);
                const newEndDate = endDateTime.toLocaleDateString(
                    "en-US",
                    dateOptions
                );
                return (
                    <div className="relative" data-aos="fade-up">
                        <img
                            src={exhibition.image}
                            className=" mb-[10px] w-[400px] h-[450px] object-cover m-auto"
                            alt="product"
                        />
                        <ul className="flex flex-col gap-[2px] relative px-[10px] py-[10px] font-slab">
                            <li className="font-medium font-libre text-[20px] text-center">
                                {exhibition.name}
                            </li>
                            <hr></hr>
                            <li className="font-medium text-[15px] text-center">
                                {exhibition.location}
                            </li>
                            <li className="font-medium text-[15px] text-center">
                                {newStartDate} - {newEndDate}
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};
