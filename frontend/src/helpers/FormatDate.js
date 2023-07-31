export const FormatDate = ({date})=>{
    const dateObj = new Date(date);
    const newDate = dateObj.toISOString().slice(0, 10);
    return newDate
}