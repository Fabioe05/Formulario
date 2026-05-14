const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const NUMBER_REGEX = /^\+?[\d\s\-]{7,15}$/;
const USERNAME_REGEX = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;

//Selectores
const countries = document.querySelector('#countries');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('email')

//Validation
let usernameValidation = false;
let emailValidation = false;

// Solo mostrar el nombre del pais sin el numero
[...countries].forEach(option => {
    option.innerHTML = option.innerHTML.split('(')[0];
});

usernameInput.addEventListener('input', event => {
    usernameValidation = USERNAME_REGEX.test(event.target.value);
    if (usernameValidation) {
        usernameInput.classList.add('true')
    } else {
        usernameInput.classList.add('false');
    }
    
});






