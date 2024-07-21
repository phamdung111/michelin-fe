export const formatTimeToDateProvider = (dateString: Date): string => {
    const dateTime = new Date(dateString);
    const date = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    return `${date}/${month}/${year}`;
};
