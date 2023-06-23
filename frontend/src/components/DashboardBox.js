
export const Box = ({children,number}) => {
    return (
        <div
            className="h-[300px] w-[350px] bg-[#29CC97] shadow-xl text-white text-center rounded-[10px] m-auto"
           
        >
           <h3 className="text-[30px] mt-7">{children}</h3> 
           <p className="text-[80px] mt-5">{number}</p>
        </div>
    );
};