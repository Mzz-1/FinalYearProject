import FooterList from "./FooterList";

export const Footer = () => {
    const about = ["ABOUT US", "ARTISTS", "EVENTS"];
    const about1 = [
        { itemName: "JOIN US", link: "/" },
        { itemName: "SIGN UP", link: "/register" },
        { itemName: "SIGN UP AS AN ARTIST", link: "/register" },
        
    ];
    const events1 = [
        { itemName: "EVENTS", link: "/" },
        { itemName: "ONGOING EVENTS", link: "/events" },
        { itemName: "UPCOMMING EVENTS", link: "/events" },
        
    ];
    const shop1 = [
        { itemName: "SHOP", link: "/" },
        { itemName: "BROWSE STORE", link: "/events" },
        { itemName: "SELL YOUR ART", link: "/register" },
        
    ];

    const ARTISTS = [
        { itemName: "SHOP", link: "/" },
        { itemName: "BROWSE ARTISTS", link: "/artists" },
        { itemName: "SIGN UP AS AN ARTIST", link: "/register" },
        
    ];
    const events = ["EVENTS", "ONGOING EVENTS", "UPCOMMING EVENTS"];
    const shop = ["SHOP", "BROWSE STORE", "SELL YOUR ART"];
    const artists = ["ARTISTS", "BROWSE ARTISTS", "SIGN UP AS AN ARTIST"];
    return (
        <footer className="flex flex-col py-[30px] shadow-inner font-slab">
            <div className="grid grid-rows-2 grid-cols-4 px-[50px] items-center justify-items-center ">
                <FooterList items={about} />
                <FooterList items={events} />
                <FooterList items={shop} />
                <FooterList items={artists} />
            </div>
            <p className="text-[12px] font-medium text-center">
                @SimplyArt, All rights reserved.
            </p>
        </footer>
    );
};
