import { Link, NavLink } from "react-router-dom";
export const ArtistNavbar =({id,links})=>{
    // const links = [
    //     { itemName: "BIOGRAPHY", link: `/artist-profile/biography/${id}` },
    //     { itemName: "PORTFOLIO", link: `/artist-profile/portfolio/${id}` },
    //     { itemName: "EXHIBITION", link: `/artist-profile/exhibition/${id}` },
    // ];
    return(
        <div>
                <ul className="flex gap-[20px] text-[12px] justify-end mb-[20px] font-slab ">
                    
                     {links.map((item, i) => (
                        <li key={i}>
                            <NavLink
                                to={item.link}
                                exact
                                className={({ isActive }) => {
                                    return isActive ? "border-b-2 pb-1 border-[#9F7E7E] " : "hover:border-b-2 pb-1 border-[#9F7E7E]";
                                }}
                            >
                                {item.itemName}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <hr></hr>
            </div>
    )
}