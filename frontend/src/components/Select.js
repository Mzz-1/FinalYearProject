export const Select = ({
    type,
    placeholder,
    register,
    defaultValue,
    onChange,
}) => {
    const categories = [
        "Painting",
        "Sculptures",
        "Ceramics",
        "Photography",
        "Drawings",
        "Prints",
    ];
    return (
        <select
            className="w-64 h-[70px] px-3 border-gray-300 shadow-in focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            {...register}
            onChange={onChange}
        >
            <option value="">Select a category</option>
            {categories.map((category, i) => (
                <option key={i} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};
