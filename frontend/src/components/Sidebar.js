import { Link } from "react-router-dom";
import { useState } from "react";
import { AdminHeading2 } from "./Heading";
import { RiArrowRightSLine, RiCalendarEventLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import {MdLogout} from "react-icons/md";

export const Sidebar = ({items}) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="flex flex-col py-[20px]  h-[100%]">
            <AdminHeading2>Welcome Admin</AdminHeading2>
            <div className="flex justify-center mt-[50px]">
                <ul className=" w-[100%] flex flex-col gap-[10px]">
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className="text-[20px]  px-[20px] text-[#A4A6B3] "
                        >
                            <span className="flex  items-center justify-between mb-[10px]">
                                <p className="flex items-center gap-2">
                                    {item.icon}
                                    <Link to={item.link}>{item.itemName}</Link>
                                </p>
                                <button
                                    className=""
                                    onClick={handleDropdownClick}
                                >
                                    <RiArrowRightSLine color="white" />{" "}
                                </button>
                            </span>

                            {showDropdown && (
                                <ul className="pl-[30px]">
                                    {item.subItems?.map((subItem, j) => (
                                        <li key={j} className="">
                                            {" "}
                                            <Link to={subItem.link}>
                                                {subItem.subItemName}
                                            </Link>{" "}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
               
            </div>
            
            <button className=" text-[20px]  text-[#A4A6B3] mt-[auto] flex items-center gap-4 justify-center">Log out <MdLogout/> </button>
        </div>
    );
};