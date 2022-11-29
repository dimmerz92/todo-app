const contact = () => {
    const content = document.createElement('div');
    content.id = 'contactLayout';

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Me';
    content.appendChild(h1);

    const info = document.createElement('p');
    info.textContent = 'The best way to contact me is by messaging me on GitHub';
    content.appendChild(info);

    const link = document.createElement('a');
    link.href = 'https://www.github.com/dimmerz92/todo-app';
    link.textContent = 'My GitHub';
    content.appendChild(link);

    return content;
};

export default contact;