import render from "../classes/render";
import projectView from "./projectView";

const newProject = (handler) => {
    const content = document.createElement('div');
    content.id = 'newProjectLayout';

    const h1 = document.createElement('h1');
    h1.textContent = 'Create a new project';
    content.appendChild(h1);

    const form = document.createElement('form');
    form.id = 'projectForm';
    
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title';
    titleLabel.textContent = 'Title';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    titleInput.id = 'title';
    form.appendChild(titleInput);

    const descLabel = document.createElement('label');
    descLabel.htmlFor = 'desc';
    descLabel.textContent = 'Description';
    form.appendChild(descLabel);

    const descInput = document.createElement('textarea');
    descInput.name = 'desc';
    descInput.id = 'desc';
    form.appendChild(descInput);

    content.appendChild(form);

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        handler.newProject(document.getElementById('title').value, document.getElementById('desc').value);
        const titles = document.createElement('ul');
        handler.getProjects().forEach(project => {
            const li = document.createElement('li');
            li.textContent = project.title;
            titles.appendChild(li);
        });
        render(titles, 'projects');
        render(projectView(handler.getProject(-1)), 'mainContent');
    });
    content.appendChild(submit);

    return content;
};

export default newProject;