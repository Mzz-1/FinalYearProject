const FooterList = ({items}) => {
    return (
        <ul className="flex flex-col text-[11px] gap-[9px]">
            {items.map((items,i)=>(
                <li key={i} className={i===0? "text-sm font-medium" : ""}>{items}</li>
            ))}
        </ul>
    );
};

export default FooterList;
