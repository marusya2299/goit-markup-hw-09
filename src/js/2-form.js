'use strict';

const form = document.querySelector(".feedback-form");
const inputEmail = form.querySelector("input");
const inputMessage = form.querySelector("textarea");
const button = form.querySelector("button");


function loadFormData() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedData) {
        inputEmail.value = savedData.email || '';
        inputMessage.value = savedData.message || '';
    }
}

loadFormData();

function saveFormData() {
    const formData = {
        email: inputEmail.value.trim(),
        message: inputMessage.value.trim()
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', saveFormData);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (inputEmail.value.trim() && inputMessage.value.trim()) {
        const formData = {
            email: inputEmail.value.trim(),
            message: inputMessage.value.trim()
        };
        console.log(formData);

        localStorage.removeItem('feedback-form-state');
        inputEmail.value = '';
        inputMessage.value = '';
    } else
    {
        alert('Please fill in all fields.');
    }
});
