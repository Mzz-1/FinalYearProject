import { IonIcon } from "@ionic/react";
import { search, cart } from "ionicons/icons";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../service/useUser";
import { LogOutModal } from "./Modal";
import { ModalHeading } from "./Heading";
import { ModalPara } from "./Paragraph";
import { SuccessToast } from "../helpers/Toast";

export const Navbar = () => {
    const items = [
        { itemName: "HOME", link: "/" },
        { itemName: "STORE", link: "/store" },
        { itemName: "ARTISTS", link: "/artists" },
        { itemName: "EVENTS", link: "/events" },
        { itemName: "CART", link: "/cart" },
    ];
    const user = useUser();

    const navigate = useNavigate;

    const LogOut = () => {
        localStorage.removeItem("token");
        SuccessToast("Logged out.");
        window.location.reload(true);
        navigate("/");
    };

    return (
        <header>
            <nav className="grid grid-rows-1 grid-cols-2 px-[50px] h-[80px] shadow-lg items-center ">
                <p className="font-medium text-2xl">SimplyArt</p>
                <ul className="flex gap-[20px] text-[12px] justify-end">
                    {items.map((items, i) => (
                        <li key={i} className="">
                            <Link to={items.link}>{items.itemName}</Link>
                        </li>
                    ))}
                    {user?.role === "artist" && (
                        <li key={5} className="">
                            <Link to="/artist-dashboard">DASHBOARD</Link>
                        </li>
                    )}
                    {!user && (
                        <li key={6} className="">
                            <Link to="/login">LOG IN</Link>
                        </li>
                    )}
                    {user && (
                        <button key={7} className="" onClick={LogOut}>
                            LOGOUT
                        </button>
                    )}
                </ul>
            </nav>
        </header>
    );
};
