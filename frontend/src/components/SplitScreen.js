const SplitScreen = ({ children }) => {
    const [left, right] = children;
    return (
        <div className="flex  bg-[#FAF9F6]  h-[100vh]">
            <div className="flex-initial w-[250px]  bg-[#23282c] shadow-in">{left}</div>
            <div className="grow px-[30px] overflow-y-scroll">{right}</div>
        </div>
    );
};

export default SplitScreen;
