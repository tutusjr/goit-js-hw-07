const body = document.querySelector('body');
const button = document.querySelector('button');
const color = document.querySelector('span');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

button.addEventListener('click', () => {
    body.style.backgroundColor = getRandomHexColor();
    color.textContent = getRandomHexColor();
})