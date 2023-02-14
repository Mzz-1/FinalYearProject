const SplitScreen = ({ children }) => {
    const [left, right] = children;
    return (
        <div className="flex">
            <div className="flex-initial w-[250px] bg-[brown]">{left}</div>
            <div className="grow">{right}</div>
        </div>
    );
};

export default SplitScreen;
