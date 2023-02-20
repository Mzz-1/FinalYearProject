import { Link } from "react-router-dom";
import { Heading } from "./Heading";
export const AdminSidebar = () => {
    const items = [
        { itemName: "Dashboard", link: "" },
        { itemName: "Events", link: "" },
        { itemName: "Artists", link: "" },
        { itemName: "Users", link: "" },
    ];
    return (
        <>
        <Heading text="Welcome Admin"/>
        <div className="flex justify-center">
          
            <ul className=" w-[100%]">
                {items.map((items, i) => (
                    <li key={i} className="text-[20px] py-[10px] px-[20px] text-[#A4A6B3]">
                       <Link to={items.link}>{items.itemName}</Link> 
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};
