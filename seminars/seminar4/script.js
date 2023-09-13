const checkbox = document.querySelector("#agree");
const submitBtn = document.querySelector(".button");
const body = document.querySelector("body");
const div = document.querySelector(".message");

submitBtn.addEventListener("click", clickTheButton);

function clickTheButton() {
  if (!checkbox.checked) {
    div.textContent = "Необходимо согласиться с условием";
    div.style.color = "red";
  } else {
    div.textContent = "Согласились";
    div.style.color = "green";
  }
}

//-------------------------------------

const teaBtn = document.querySelector("input[value='tea'");
const coffeeBtn = document.querySelector("input[value='coffee']");
const drinkBtn = document.querySelector(".drink-button");

drinkBtn.addEventListener("click", () => {
  if (teaBtn.checked) {
    alert("Чай закончился");
  } else if (coffeeBtn.checked) {
    alert("Coffee закончился");
  }
});

//---------------------------------------

const form = document.querySelector(".form");
const passwordField = document.querySelector(".password");
const submitButton = document.querySelector(".pass-button");
const togglePasswordButton = document.querySelector(".toggle-password");
togglePasswordButton.style.display = "none";
form.style.margin = "150px";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (passwordField.value === "пароль") {
    passwordField.style.borderColor = "green";
    passwordField.style.borderWidth = "3px";
    passwordField.setCustomValidity("Пароль верный");
  } else {
    passwordField.style.borderColor = "red";
    passwordField.style.borderWidth = "3px";
    passwordField.setCustomValidity("Пароль не верный");
  }
  passwordField.reportValidity();
});

passwordField.addEventListener("input", (event) => {
  passwordField.setCustomValidity("");
});

passwordField.addEventListener("input", () => {
  if (passwordField.value === "") {
    togglePasswordButton.style.display = "none";
  } else {
    togglePasswordButton.style.display = "inline-block";
  }
});

togglePasswordButton.addEventListener("click", (event) => {
  event.preventDefault();
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  togglePasswordButton.textContent =
    type === "password" ? "Показать пароль" : "Скрыть пароль";
});

//----------------------------------

textInput.addEventListener("input", changeInput);

const changeInput = () => {
  const textInput = document.querySelector(".text-input");
  const header = document.querySelector("h1");
  header.innerText = textInput.value;
};
