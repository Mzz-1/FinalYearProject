const Input = ({type,placeholder,register,defaultValue}) => {
    return (
        <input
            className="w-[440px] shadow-in h-[45px] placeholder-[#9F7E7E] px-[30px]"
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            {...register}
        />
    );
};

export default Input
