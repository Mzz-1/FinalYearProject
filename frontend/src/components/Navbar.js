import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../service/useUser";
import { LogOutModal } from "./Modal";
import { ModalHeading } from "./Heading";
import { ModalPara } from "./Paragraph";
import { SuccessToast } from "../helpers/Toast";
import { useState, useEffect } from "react";
import Headroom from "react-headroom";

export const Navbar = () => {
    const items = [
        { itemName: "HOME", link: "/" },
        { itemName: "STORE", link: "/store" },
        { itemName: "ARTISTS", link: "/artists" },
        { itemName: "EVENTS", link: "/events" },
        { itemName: "CART", link: "/cart" },
    ];

    const user = useUser();
    const navigate = useNavigate();

    const LogOut = () => {
        localStorage.removeItem("token");
        SuccessToast("Logged out.");
        window.location.reload(true);
        navigate("/");
    };

    return (
        <header className="bg-[#fdfdfd] z-[9999999999]">
            <Headroom>
                <div className="bg-[#fdfdfd]">
                    <nav
                        className={` grid grid-rows-1 grid-cols-2 px-[50px] h-[80px] shadow-lg items-center } `}
                    >
                        <p className="font-medium text-2xl text-[#9F7E7E] font-libre">
                            SimplyArt
                        </p>
                        <ul className="flex gap-[20px] text-[12px] justify-end font-slab">
                            {items.map((item, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={item.link}
                                        exact
                                        className={({ isActive }) => {
                                            return isActive
                                                ? "border-b-2 pb-1 border-[#9F7E7E] "
                                                : "hover:border-b-2 pb-1 border-[#9F7E7E]";
                                        }}
                                    >
                                        {item.itemName}
                                    </NavLink>
                                </li>
                            ))}
                            {user?.role === "artist" && (
                                <li>
                                    <NavLink
                                        to="/artist-dashboard"
                                        exact
                                        className={({ isActive }) => {
                                            return isActive
                                                ? "border-b-2 pb-1 border-[#9F7E7E] "
                                                : "hover:border-b-2 pb-1 border-[#9F7E7E]";
                                        }}
                                    >
                                        DASHBOARD
                                    </NavLink>
                                </li>
                            )}
                            {!user && (
                                <li>
                                    <NavLink
                                        to="/login"
                                        exact
                                        className={({ isActive }) => {
                                            return isActive
                                                ? "border-b-2 pb-1 border-[#9F7E7E] "
                                                : "hover:border-b-2 pb-1 border-[#9F7E7E]";
                                        }}
                                    >
                                        LOG IN
                                    </NavLink>
                                </li>
                            )}
                            {user && (
                                <button className="" onClick={LogOut}>
                                    LOGOUT
                                </button>
                            )}
                        </ul>
                    </nav>
                </div>
            </Headroom>
        </header>
    );
};
