const itemCard = (item) => {
    const content = document.createElement('div');
    content.classList.add('itemCard');

    const h2 = document.createElement('h2');
    h2.textContent = item.title;
    content.appendChild(h2);

    const desc = document.createElement('p');
    desc.textContent = item.desc;
    content.appendChild(desc);

    const date = document.createElement('p');
    date.textContent = item.date;
    content.appendChild(date);

    const priority = document.createElement('p');
    priority.textContent = item.priority;
    content.appendChild(priority);

    return content;
};

export default itemCard;