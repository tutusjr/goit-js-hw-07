const password = document.querySelector('#password');
const email = document.querySelector('#email');
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit');
const deleteButton = document.querySelector('#delete');

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const values = {
    email: '',
    password: '',
}

deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    form.reset();
})

function submitForm() {
    console.log('Form submitted successfully');
    values.email = email.value;
    values.password = password.value;
    console.log(values);
    form.reset();
    
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(password.value === '' || email.value === '') {
        alert('All form fields must be filled in');
    }else if(!email.value.match(regex)) {
        alert('Please enter a valid email');
    }else {
        submitForm();
    }
    
})

