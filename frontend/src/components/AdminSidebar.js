import { Link } from "react-router-dom";
export const AdminSidebar = () => {
    const items = [
        { itemName: "Dashboard", link: "" },
        { itemName: "Events", link: "" },
        { itemName: "Artists", link: "" },
        { itemName: "Users", link: "" },
    ];
    return (
        <div>
            <ul>
                {items.map((items, i) => (
                    <li key={i} className="">
                       <Link to={items.link}>{items.itemName}</Link> 
                    </li>
                ))}
            </ul>
        </div>
    );
};
