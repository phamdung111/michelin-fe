export const formatTimeToHourProvider = (dateString: any): string => {
    const date = new Date(dateString);
    const hour = date.getHours();
    let minute = date.getMinutes();
    let minuteFormat = '';
    minute <= 9 ? (minuteFormat = '00') : (minuteFormat = minute.toString());
    return `${hour}:${minuteFormat}`;
};
