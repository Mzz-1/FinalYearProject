import { Link } from "react-router-dom";
export const ArtistNavbar =({id})=>{
    const links = [
        { itemName: "BIOGRAPHY", link: `/artist-profile/biography/${id}` },
        { itemName: "PORTFOLIO", link: `/artist-profile/portfolio/${id}` },
        { itemName: "EXHIBITION", link: `/artist-profile/exhibition/${id}` },
    ];
    return(
        <div>
                <ul className="flex gap-[20px] text-[12px] justify-end mb-[20px] font-slab ">
                    {links.map((link, i) => (
                        <li key={i} className="">
                            <Link to={link.link}>{link.itemName}</Link>
                        </li>
                    ))}
                </ul>
                <hr></hr>
            </div>
    )
}