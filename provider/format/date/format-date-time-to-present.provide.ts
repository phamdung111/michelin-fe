export const formatDateTimeToPresentProvide = (dateString: Date) => {
    const date = new Date(dateString);
    const present = new Date();
    const toPresent = (present.getTime() - date.getTime()) / 1000;

    let str = '';
    if (toPresent < 60) {
        str = 'a minute';
    } else if (toPresent >= 60 && toPresent < 3600) {
        str = `${Math.floor(toPresent / 60)} minutes`;
    } else if (toPresent >= 3600 && toPresent < 7200) {
        str = '1 hour';
    } else if (toPresent >= 7200 && toPresent < 86400) {
        str = `${Math.floor(toPresent / 3600)} hours`;
    } else if (toPresent >= 86400 && toPresent < 172800) {
        str = '1 day';
    } else if (toPresent >= 172800 && toPresent < 2592000) {
        str = `${Math.floor(toPresent / 86400)} days`;
    } else if (toPresent >= 2592000 && toPresent < 5184000) {
        str = '1 month';
    } else if (toPresent >= 5184000 && toPresent < 5184000) {
        str = `${Math.floor(toPresent / 2592000)} months`;
    }
    return str;
};
