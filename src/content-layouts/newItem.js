import render from "../classes/render";
import itemCard from "./itemCard";
import projectView from "./projectView";

const newItem = (project) => {
    const content = document.createElement('div');
    content.id = 'newItemLayout';

    const h1 = document.createElement('h1');
    h1.textContent = 'Create a new item';
    content.appendChild(h1);

    const form = document.createElement('form');
    form.id = 'itemForm';
    
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

    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'date';
    dateLabel.textContent = 'Due Date';
    form.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.id = 'date';
    form.appendChild(dateInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.htmlFor = 'priority';
    priorityLabel.textContent = 'Priority';
    form.appendChild(priorityLabel);

    const priorityInput = document.createElement('select');
    priorityInput.name = 'priority';
    priorityInput.id = 'priority';
    const priorityArray = ['Low','Medium','High'];
    priorityArray.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        priorityInput.appendChild(option);
    });
    form.appendChild(priorityInput);

    content.appendChild(form);

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        project.newItem(document.getElementById('title').value, document.getElementById('desc').value, document.getElementById('date').value,
                        document.getElementById('priority').value);
        render(projectView(project), 'mainContent')
    });
    content.appendChild(submit);

    return content;
};

export default newItem;