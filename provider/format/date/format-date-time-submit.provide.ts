export const formatDateTimeSubmitProvide = (date: string, hour: string) => {
    const dateFormat = new Date(date);
    const formattedDate = `${dateFormat.getFullYear()}-${String(dateFormat.getMonth() + 1).padStart(2, '0')}-${String(dateFormat.getDate()).padStart(2, '0')}`;
    return `${formattedDate} ${hour}`;
};
