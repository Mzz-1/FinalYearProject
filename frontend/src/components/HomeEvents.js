export const HomeEvents = () => {
    return (
        <div className="h-[560px] bg-[#9F7E7E] text-[white] grid items-center justify-center">
            <h2 className="text-center">EXPLORE EVENTS</h2>
            <div className="grid grid-rows-1 grid-cols-2 items-center justify-center gap-[150px]">
                <div className="flex items-center justify-center">
                    <img
                        src="https://res.cloudinary.com/djuzpmqlp/image/upload/v1676613644/assets/about_bfnndy.png"
                        className="w-[450px] h-[450px] object-cover"
                        alt="about"
                    />
                </div>
                <div className="w-[500px] text-center">
                    <p>
                        "Discover Upcoming and Ongoing Exhibitions. Explore the
                        latest in contemporary art, classical masterpieces, and
                        everything in between. Our website showcases a diverse
                        range of art exhibitions from galleries and museums
                        around the world. Stay informed and plan your visit by
                        browsing our comprehensive listings of upcoming and
                        ongoing art exhibitions. From solo shows to group
                        exhibitions, our website provides an immersive platform
                        for art enthusiasts of all levels. Don't miss out on the
                        opportunity to be inspired by the creativity of the
                        world's most talented artists. Browse our listings now
                        and plan your next artistic adventure."
                    </p>
                </div>
            </div>
        </div>
    );
};
