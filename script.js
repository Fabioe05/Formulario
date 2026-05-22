const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
const USERNAME_REGEX = /^[a-zA-Z0-9]{5,16}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMBER_REGEX = /^\d{7,15}$/;

//Selectores
const countries = document.querySelector("#countries");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const phoneCode = document.querySelector("#phone-code");
const phoneInput = document.querySelector("#phone");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const boton = document.querySelector("#boton");
const form = document.querySelector("#form");

//Validation
let usernameValidation = false;
let emailValidation = false;
let phoneValidation = false;
let passwordValidation = false;
let confirmPasswordValidation = false;
let countriesValidation = false;

// Solo mostrar el nombre del pais sin el numero
[...countries].forEach((option) => {
  option.innerHTML = option.innerHTML.split("(")[0];
});

// Function

// ajustar los estilos
const validador = (event, validation, element) => {
  const information = event.target.parentElement.children[2];
  boton.disabled =
    usernameValidation &&
    emailValidation &&
    phoneValidation &&
    passwordValidation &&
    confirmPasswordValidation &&
    countriesValidation
      ? false
      : true;
  if (validation) {
    element.classList.add("true");
    element.classList.remove("false");
    information.classList.remove("show-information");
  } else {
    element.classList.add("false");
    element.classList.remove("true");
    information.classList.add("show-information");
  }
};

// recibir la informacion del input y validar
usernameInput.addEventListener("input", (event) => {
  usernameValidation = USERNAME_REGEX.test(event.target.value);
  validador(event, usernameValidation, usernameInput);
});

emailInput.addEventListener("input", (event) => {
  emailValidation = EMAIL_REGEX.test(event.target.value);
  validador(event, emailValidation, emailInput);
});

countries.addEventListener("input", (event) => {
  const optionSelected = [...event.target.children].find(
    (option) => option.selected,
  );
  phoneCode.innerHTML = `+${optionSelected.value}`;
  countriesValidation = optionSelected.value === "" ? false : true;
  countries.classList.add("true");
  phoneCode.classList.add("true");
  validador(event, null, null);
});

phoneInput.addEventListener("input", (event) => {
  phoneValidation = NUMBER_REGEX.test(event.target.value);
  const information = event.target.parentElement.parentElement.children[2];
  if (phoneValidation) {
    phoneInput.classList.add("true");
    phoneInput.classList.remove("false");
    information.classList.remove("show-information");
  } else {
    phoneInput.classList.add("false");
    phoneInput.classList.remove("true");
    information.classList.add("show-information");
  }
});

passwordInput.addEventListener("input", (event) => {
  passwordValidation = PASSWORD_REGEX.test(event.target.value);
  validador(event, passwordValidation, passwordInput);
});

confirmPasswordInput.addEventListener("input", (event) => {
  confirmPasswordValidation = passwordInput.value === event.target.value;
  validador(event, confirmPasswordValidation, confirmPasswordInput);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    username: usernameInput.value,
    email: emailInput.value,
    phone: `${phoneCode.innerHTML} ${phoneInput.value}`,
    password: passwordInput.value,
  };
  console.log(user);
  alert(
    `Usuario creado exitosamente: \n Username: ${user.username} \n Email: ${user.email} \n Number: ${user.phone}`,
  );
});
