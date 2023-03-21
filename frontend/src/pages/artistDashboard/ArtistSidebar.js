import { RiArrowRightSLine, RiCalendarEventLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { AdminHeading } from "../../components/Heading";
import { Sidebar } from "../../components/Sidebar";

export const ArtistSidebar = () => {
    const items = [
        { itemName: "Dashboard", link: "", icon: <RxDashboard /> },
        {
            itemName: "Products",
            subItems: [
                {
                    subItemName: "Add Event",
                    link: "/artist-dashboard/add-product",
                },
                {
                    subItemName: "Manage Products",
                    link: "/artist-dashboard/products",
                },
            ],
            icon: <RiCalendarEventLine />,
            link: "/admin-dashboard/products",
        },
        {
            itemName: "About Artist",
            subItems: [
                {
                    subItemName: "Biography",
                    link: "/artist-dashboard/biography",
                },
                
            ],
            link: "",
            icon: <AiOutlineUser />,
        },
        {
            itemName: "Featured Events",
            subItems: [
                {
                    subItemName: "Add Event",
                    link: "/artist-dashboard/add-event",
                },
                {
                    subItemName: "Featured Events",
                    link: "/artist-dashboard/manage-events",
                },
            ],
            link: "",
            icon: <AiOutlineUser />,
        },
        {
            itemName: "Orders",
            subItems: [
                {
                    subItemName: "Manage Users",
                    link: "/admin-dashboard/users",
                },
            ],
            link: "",
            icon: <AiOutlineUser />,
        },
    ];

    return(
        <Sidebar items={items}/>
    )
};
