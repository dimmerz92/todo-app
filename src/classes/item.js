const item = (title, desc, date, priority) => {
    const getItem = () => {
        return {title, desc, date, priority};
    };

    const changeDate = (newDate) => {
        date = newDate;
    };

    const changePriority = (newPriority) => {
        priority = newPriority;
    };

    return {getItem, changeDate, changePriority};
};

export default item;