'use strict';

const form = document.querySelector(".feedback-form");
const inputEmail = form.querySelector("input");
const inputMessage = form.querySelector("textarea");
const button = form.querySelector("button");


function saveFormData() {
    const formData = {
        email: inputEmail.value.trim(),
        message: inputMessage.value.trim()
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (savedData) {
        inputEmail.value = savedData.email || '';
        inputMessage.value = savedData.message || '';
    }
}

function clearFormData() {
    localStorage.removeItem('feedback-form-state');
}

loadFormData();

form.addEventListener('input', () => {
    saveFormData();
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (inputEmail.value.trim() && inputMessage.value.trim()) {
        const formData = {
            email: inputEmail.value.trim(),
            message: inputMessage.value.trim()
        };
        console.log(formData);

        clearFormData();
        inputEmail.value = '';
        inputMessage.value = '';
    } else
    {
        alert('Please fill in all fields.');
    }
});
