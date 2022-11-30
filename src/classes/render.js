const render = (content, target) => {
    const view = document.getElementById(target);
    view.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        view.appendChild(content);
    };
};

export default render;