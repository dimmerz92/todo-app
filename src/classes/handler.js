import project from "./project";

const handler = () => {
    const projects = [];

    const getProject = (index) => {
        if (index === -1) {
            return projects[projects.length - 1];
        } else {
            return projects[index].getProject();
        };
    };

    const getProjects = () => {
        const projectsArray = [];
        projects.forEach(project => {
            projectsArray.push(project.getProject());
        });
        return projectsArray;
    };

    const newProject = (title, desc) => {
        projects.push(project(title, desc));
    };

    const deleteProject = (index) => {
        projects.splice(index, 1);
    };

    return {getProject, getProjects, newProject, deleteProject};
};

export default handler;