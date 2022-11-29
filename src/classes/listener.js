import about from "../content-layouts/about";
import contact from "../content-layouts/contact";
import home from "../content-layouts/home"
import newProject from "../content-layouts/newProject";
import projectView from "../content-layouts/projectView";
import render from "./render"

const listener = (handler) => {
    // nav links
    document.getElementById('home').addEventListener('click', () => {
        render(home(), 'mainContent');
    });
    document.getElementById('about').addEventListener('click', () => {
        render(about(), 'mainContent');
    });
    document.getElementById('contact').addEventListener('click', () => {
        render(contact(), 'mainContent');
    });

    // project button
    document.getElementById('newProject').addEventListener('click', () => {
        render(newProject(handler), 'mainContent');
        render(projectView(handler.getProject(-1)), 'mainContent');
    });
};

export default listener;