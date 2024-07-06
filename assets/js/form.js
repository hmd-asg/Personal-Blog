const user_input = document.querySelector('#username');
const title_input = document.querySelector('#title');
const content_input = document.querySelector('#content');
const form = document.querySelector('form');
const msg = document.querySelector('#msg');

const blogs_data = getData();

function showAllert() {
    msg.textContent = "please fill out fields";
    msg.style = 'background-color : red;';
    setTimeout(() => msg.remove(), 3000);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (user_input.value == '' || title_input.value == '' || content_input.value == '') {
        showAllert();
    } else {
        const personalBlog = {
            username: user_input.value,
            title: title_input.value,
            content: content_input.value
        }
        blogs_data.push(personalBlog);
        localStorage.setItem('blogs', JSON.stringify(blogs_data));

        user_input.value = '';
        title.value = '';
        content_input.value = '';
        location.href = './blog.html';
    }
});

