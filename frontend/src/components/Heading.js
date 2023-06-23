export const Heading=({children,color})=>{
    return(
        <h2 className="text-[#3C3737] text-[38px] font-libre" >{children}</h2>
    )
}

export const Heading1=({children,color})=>{
    return(
        <h2 className="text-[#3C3737] text-[34px] font-slab" >{children}</h2>
    )
}

export const Heading2=({children})=>{
    return(
        <h2 className="text-[#3C3737] text-[32px] font-libre border-b-2">{children}</h2>
    )
}

export const AdminHeading=({children})=>{
    return(
        <h2 className="text-[#3C3737] text-[28px]">{children}</h2>
    )
}

export const AdminHeading2=({children, color})=>{
    return(
        <h2 className="text-[#A4A6B3] text-[22px] text-center">{children}</h2>
    )
}

export const ModalHeading=({children, color})=>{
    return(
        <h2 className="text-[#36454F] text-[22px] font-medium">{children}</h2>
    )
}

export const DashboardHeading=({children, color})=>{
    return(
        <h2 className="text-5xl font-light w-[fit-content] border-b-[2px] pb-2 border-black ">{children}</h2>
    )
}

