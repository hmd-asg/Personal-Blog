const secContent = document.querySelector('section');
const btnBack = document.querySelector('#back');
const blgContents = getData();

btnBack.addEventListener('click', () => {
    location.href = './index.html';
});

function loadContent() {
    for (const blog of blgContents) {

        const divCont = document.createElement('div');
        const title = document.createElement('h3');
        const content = document.createElement('p');
        const userName = document.createElement('p');

        title.style = 'border-bottom : 2px solid';
        title.textContent = blog.title;
        content.textContent = blog.content;
        userName.textContent = `Posted by : ${blog.username}`;

        divCont.appendChild(title)
        divCont.appendChild(content);
        divCont.appendChild(userName);
        secContent.append(divCont);
    }
}

loadContent();
