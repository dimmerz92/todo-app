import render from "../classes/render";
import itemCard from "./itemCard";
import newItem from "./newItem";

const projectView = (project) => {
    // content container
    const content = document.createElement('div');
    content.id = 'projectViewLayout';

    // header
    const h1 = document.createElement('h1');
    h1.textContent = project.title;
    content.appendChild(h1);

    // description
    const desc = document.createElement('p');
    desc.textContent = project.desc;
    content.appendChild(desc);

    // new item
    const itemButton = document.createElement('button');
    itemButton.textContent = 'New Item';
    itemButton.addEventListener('click', () => {
        render(newItem(project), 'mainContent');
    });
    content.appendChild(itemButton);

    // item cards 
    const items = document.createElement('div');
    items.classList.add('itemCardContainer');
    project.items.forEach(item => {
        items.appendChild(itemCard(item.getItem()));
    });
    content.appendChild(items);

    return content;
};

export default projectView;