const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount){
    const maxAmount = 100;
    if (amount > maxAmount) {
        alert(`Maksimum ${maxAmount} kutu olusturabilirsiniz.`);
        amount = maxAmount;
    }else{
        for (let i = 0; i < amount; i++){
            const div = document.createElement('div');
            div.style.backgroundColor = getRandomHexColor();
            div.style.width = `${30 + 10 * i}px`;
            div.style.height = `${30 + 10 * i}px`;
            boxes.append(div);
        }
    }
    
  }

  function destroyBoxes(){
    boxes.innerHTML = '';
  }

  createButton.addEventListener('click', () => {
    destroyBoxes();
    createBoxes(input.value);
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  })