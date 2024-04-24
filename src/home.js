function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const cocoImage = document.createElement('img');

    home.appendChild(createParagraph('Welcome to Angela\'s Restaurant!'));
    home.appendChild(createParagraph('We serve the best food in town!'));
    home.appendChild(createParagraph('Order online or visit us!'));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;