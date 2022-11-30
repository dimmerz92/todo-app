import render from "../classes/render";
import home from "./home";
import projectView from "./projectView";

const projectNav = (handler) => {
    const titles = document.createElement('ul');
    const dels = document.createElement('ul');
    handler.getProjects().forEach((project, index) => {
        // project links
        const liTitle = document.createElement('li');
        const aTitle = document.createElement('a');
        aTitle.href = 'javascript:void(0)';
        aTitle.id = 'title' + index;
        aTitle.textContent = project.title;
        aTitle.addEventListener('click', e => {
            render(projectView(handler.getProject(parseInt(e.target.id.match(/\d+/)[0]))), 'mainContent');
        });
        liTitle.appendChild(aTitle);
        titles.appendChild(liTitle);

        // delete links
        const liDel = document.createElement('li');
        const aDel = document.createElement('a');
        aDel.href = 'javascript:void(0)';
        aDel.id = 'del' + index;
        aDel.textContent = 'X';
        aDel.addEventListener('click', e => {
            handler.deleteProject(parseInt(e.target.id.match(/\d+/)[0]));
            render(projectNav(handler), 'projects');
            render(home(), 'mainContent');
        });
        liDel.appendChild(aDel);
        dels.appendChild(liDel);
    });

    return [titles, dels];
};

export default projectNav;