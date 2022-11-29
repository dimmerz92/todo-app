const home = () => {
    const content = document.createElement('div');
    content.id = 'homeLayout';

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to the To Do App';
    content.appendChild(h1);

    const info = document.createElement('p');
    info.textContent = 'Create a Project by clicking the "+" button to the left and start building to do lists.';
    content.appendChild(info);

    return content;
};

export default home;