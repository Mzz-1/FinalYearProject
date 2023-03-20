export const Heading=({text})=>{
    return(
        <h2 className="text-[#3C3737] text-[38px]">{text}</h2>
    )
}

export const Heading2=({text})=>{
    return(
        <h2 className="text-[#3C3737] text-[22px] text-center">{text}</h2>
    )
}

export const AdminHeading=({children})=>{
    return(
        <h2 className="text-[#3C3737] text-[28px]">{children}</h2>
    )
}

export const AdminHeading2=({children, color})=>{
    return(
        <h2 className="text-[#A4A6B3] text-[22px]">{children}</h2>
    )
}

export const ModalHeading=({children, color})=>{
    return(
        <h2 className="text-[#36454F] text-[22px] font-medium">{children}</h2>
    )
}