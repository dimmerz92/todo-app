const render = (content, target) => {
    const view = document.getElementById(target);
    view.innerHTML = '';
    if (content.length > 1) {
        for (let i = 0; i < content.length; i++) {
            view.appendChild(content);
        };
    } else {
        view.appendChild(content);
    };
};

export default render;