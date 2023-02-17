import FooterList from "./FooterList";

export const Footer = () => {
    const about = ["ABOUT US", "ARTISTS", "EVENTS"];
    const events = ["EVENTS", "ONGOING EVENTS", "UPCOMMING EVENTS"];
    const shop = ["SHOP", "BROWSE STORE", "SELL YOUR ART"];
    const artists = ["ARTISTS", "BROWSE ARTISTS", "SIGN UP AS AN ARTIST"];
    return (
        <footer className="flex flex-col ">
            <div className="grid grid-rows-2 grid-cols-4 px-[50px] h-[70px] items-center justify-items-center">
                <FooterList items={about} />
                <FooterList items={events} />
                <FooterList items={shop} />
                <FooterList items={artists} />
            </div>
            <p className="text-[9px] font-medium text-center">
                SimplyArt, All rights reserved.
            </p>
        </footer>
    );
};


