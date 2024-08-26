const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divsHTML = "";

  for (let i = 0; i < amount; i++) {
    divsHTML += `<div style="background-color: ${getRandomHexColor()}; width: ${
      30 + 10 * i
    }px; height: ${30 + 10 * i}px;"></div>`;
  }

  boxes.innerHTML += divsHTML;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createButton.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(input.value);
  input.value = "";
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
