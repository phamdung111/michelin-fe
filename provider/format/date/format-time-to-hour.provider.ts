export const formatTimeToHourProvider = (dateString: any): string => {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
};
