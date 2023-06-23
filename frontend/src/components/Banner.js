export const Banner = ({ heading, img }) => {
    return (
        <div
            className={`h-[480px] text-[32px] font-slab object-cover bg-no-repeat w-[100vw] text-center text-white flex justify-center items-center `}
            style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" ,backgroundPosition:"0% 30%" }}
        >
            <h2 className="">{heading}</h2>
        </div>
    );
};
