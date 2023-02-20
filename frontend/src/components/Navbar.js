import {IonIcon} from '@ionic/react'
import { search,cart } from "ionicons/icons"
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const items = [
        { itemName: "STORE", link: "/store" },
        { itemName: "ARTISTS", link: "" },
        { itemName: "EVENTS", link: "/events" },
        { itemName: "LOG IN", link: "/login" },
    ];
    return (
        <header>
            <nav className="grid grid-rows-1 grid-cols-2 px-[50px] h-[70px] items-center ">
                <p className='font-medium'>SimplyArt</p>
                <ul className="flex gap-[20px] text-[10px] justify-end">
                {items.map((items, i) => (
                    <li key={i} className="">
                       <Link to={items.link}>{items.itemName}</Link> 
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    );
};


