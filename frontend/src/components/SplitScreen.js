const SplitScreen = ({ children }) => {
    const [left, right] = children;
    return (
        <div className="flex gap-[30px] bg-[#FAF9F6] pr-[30px] h-[100vh]">
            <div className="flex-initial w-[250px]  bg-[#363740] shadow-in">{left}</div>
            <div className="grow py-[20px]">{right}</div>
        </div>
    );
};

export default SplitScreen;
