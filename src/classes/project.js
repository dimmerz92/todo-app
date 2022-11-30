import item from "./item";

const project = (title, desc) => {
    const items = [];

    const getProject = () => {
        return {title, desc, items};
    };

    const getItem = (index) => {
        return items[index].getItem();
    }

    const newItem = (itemTitle, itemDesc, date, priority) => {
        items.push(item(itemTitle, itemDesc, date, priority));
    };

    const deleteItem = (index) => {
        items.splice(index, 1);
    };

    return {getProject, getItem, newItem, deleteItem}
};

export default project;