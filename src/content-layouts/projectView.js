const projectView = (project) => {
    const content = document.createElement('div');
    content.id = 'projectViewLayout';

    const h1 = document.createElement('h1');
    h1.textContent = project.title;
    content.appendChild(h1);

    const desc = document.createElement('p');
    desc = project.desc;
    content.appendChild(desc);

    // get item cards

    return content;
};

export default projectView;