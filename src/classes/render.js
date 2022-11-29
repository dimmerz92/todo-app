const render = (content, target) => {
    const view = document.getElementById(target);
    view.innerHTML = '';
    view.appendChild(content);
};

export default render;