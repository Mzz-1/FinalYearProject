export const EditButton =()=>{
    return(
        <button className="h-[30px] w-[80px] bg-[#29CC97] text-white text-center rounded-[10px] mr-[20px]">Edit</button>
    )
}

export const DeleteButton =({deleteEvent})=>{
    return(
        <button className="h-[30px] w-[80px] bg-[#29CC97] text-white text-center rounded-[10px] ml-[20px]" onClick={deleteEvent}>Delete</button>
    )
}