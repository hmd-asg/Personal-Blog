const btn_toggle = document.querySelector('#btn_toggle');

let light = true;


btn_toggle.addEventListener('click', () => {
    if (light) {
        document.body.style = 'background-color : #393832; color : white';
        btn_toggle.style = "background: url('./assets/images/light.png') no-repeat;background-size: cover;";
        light = false;
    }
    else {
        document.body.style = 'background-color : white; color : black';
        btn_toggle.style = "background: url('./assets/images/dark.png') no-repeat;;background-size: cover;";
        light = true;
    }
}
);

function getData() {
    return JSON.parse(localStorage.getItem('blogs')) || [];
};
