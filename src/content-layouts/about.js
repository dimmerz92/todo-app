const about = () => {
    const content = document.createElement('div');
    content.id = 'aboutLayout';

    const h1 = document.createElement('h1');
    h1.textContent = 'About this App';
    content.appendChild(h1);

    const info = document.createElement('p');
    info.textContent = 'This app was created under the Sittella Labs pseudonym in conjunction with the Odin Project to learn web development skills.';
    content.appendChild(info);

    const link = document.createElement('a');
    link.href = 'https://www.theodinproject.com/';
    link.textContent = 'The Odin Project';
    content.appendChild(link);

    return content;
};

export default about;