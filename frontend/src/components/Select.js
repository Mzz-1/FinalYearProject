export const Select = ({ text, options, register, defaultValue, onChange }) => {
    return (
        <select
            className="w-[180px] h-[70px] px-3 border-gray-300 shadow-in focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            {...register}
            onChange={onChange}
        >
            <option value="">{text}</option>
            {options.map((item, i) => (
                <option key={i} value={item}>
                    {item}
                </option>
            ))}
        </select>
    );
};
