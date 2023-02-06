import {IonIcon} from '@ionic/react'
import { search,cart } from "ionicons/icons"

export const Navbar = () => {
    return (
        <header>
            <nav className="grid grid-rows-1 grid-cols-2 px-[50px] h-[70px] items-center ">
                <p className='font-medium'>SimplyArt</p>
                <ul className="flex gap-[20px] text-[10px] justify-end">
                    <li>ARTWORKS</li>
                    <li>ARTISTS</li>
                    <li>EVENTS</li>
                    <li>LOG IN</li>
                    <li><IonIcon icon={search}/></li>
                    <li><IonIcon icon={cart}/></li>
                </ul>
            </nav>
        </header>
    );
};


