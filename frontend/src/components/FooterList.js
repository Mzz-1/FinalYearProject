const FooterList = ({items}) => {
    return (
        <ul className="flex flex-col text-[9px] gap-[9px]">
            {items.map((items,i)=>(
                <li key={i} className={i===0? "text-xs font-medium" : ""}>{items}</li>
            ))}
        </ul>
    );
};

export default FooterList;
