const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


nameInput.addEventListener("input", (event) => {
    const name = nameOutput.textContent = event.target.value;

    if(!name) {
        nameOutput.textContent = "Anonymous";
    }else{
        nameOutput.textContent = name
    }
})