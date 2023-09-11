const form = document.querySelector(".form-one");
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  (event) => {
    console.log("В первом UL в фазе захвата");
    const propagationControlMethodName =
      form.elements["propagation-control"].value;
    console.log(propagationControlMethodName);
    if (propagationControlMethodName) {
      event[propagationControlMethodName];
    }
  },
  true
);

list.addEventListener(
  "click",
  () => {
    console.log("Во втором UL в фазе захвата");
  },
  true
);

Array.from(list.children).forEach((child) => {
  child.addEventListener("click", () => {
    console.log("В каждом LI в фазе всплытия");
  });
});

//------------------------

const inputEl = document.querySelector(".check");
const formEl = document.querySelector(".form");
const errorEl = document.querySelector(".error");

inputEl.addEventListener("click", function (e) {
  const target = e.target;
  console.log(target.checked);
});

formEl.addEventListener("submit", function (e) {
  console.log(inputEl.checked ? "Молодец" : "Выбрать чекбокс");
});

// ----------------------------------- Пользовательские события

const eventOptions = { bubbles: true, cancelable: true };
const event = new Event("click", eventOptions);
event.viev = window;

const mouseEvent = new MouseEvent("click", {
  ...eventOptions,
  view: window,
});

document.addEventListener("click", (event) => {
  console.log(event.isTrusted);
});

const button = document.querySelector(".button-three");
button.dispatchEvent(event);
button.dispatchEvent(mouseEvent);
button.click();

//---------------------------------

const formElem = document.querySelector(".form-second");
const selectElem = formElem.querySelector(".select");
const buttonElem = formElem.querySelector(".button");

document.addEventListener("click", function (e) {
  console.log(selectElem.value);
  e.preventDefault();
});
