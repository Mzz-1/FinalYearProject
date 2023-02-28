import { Link } from "react-router-dom";
import { useState } from "react";
import { AdminHeading2 } from "./Heading";
import { RiArrowRightSLine, RiCalendarEventLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";

export const AdminSidebar = () => {
    const items = [
        { itemName: "Dashboard", link: "", icon: <RxDashboard /> },
        {
            itemName: "Events",
            subItems: [
                {
                    subItemName: "Add Event",
                    link: "/admin-dashboard/add-event",
                },
                {
                    subItemName: "Manage Event",
                    link: "/admin-dashboard/events",
                },
            ],
            icon: <RiCalendarEventLine />,
            link: "/admin-dashboard/events",
        },
        {
            itemName: "Artists",
            subItems: [
                {
                    subItemName: "Manage Artists",
                    link: "/admin-dashboard/view-artists",
                },
            ],
            link: "",
            icon: <AiOutlineUser />,
        },
        {
            itemName: "Users",
            subItems: [
                {
                    subItemName: "Manage Users",
                    link: "/admin-dashboard/view-users",
                },
            ],
            link: "",
            icon: <AiOutlineUser />,
        },
    ];

    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="flex flex-col py-[20px] text-center">
            <AdminHeading2 text="Welcome Admin" />
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
                                <ul className="">
                                    {item.subItems?.map((subItem, j) => (
                                        <li key={j}>
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
        </div>
    );
};
