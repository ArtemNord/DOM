//task1

const divElemClassBlock = document.querySelector(".block");
const divElemClassItem = document.createElement("div");
// divElemClassItem.classList.add("item");
divElemClassItem.setAttribute("class", "item__1");
divElemClassItem.textContent = "Эдемент внутри";
divElemClassBlock.append(divElemClassItem);

console.log(divElemClassItem.classList);
console.log(divElemClassItem.style);

divElemClassItem.style.color = "blue";
divElemClassItem.style.border = "1px solid black";
divElemClassItem.style.padding = "20px";
divElemClassItem.style.background = "#f8f8f8";

//task2

const pClassText = document.querySelector(".text");
console.log(pClassText.parentElement);
console.log(pClassText.parentElement.parentElement);
console.log(pClassText.previousElementSibling);
console.log(pClassText.parentElement.parentElement.firstElementChild);

//task3

const h2ElemClassSubtitle = document.querySelector(".subtitle");
const body = document.querySelector("body");
const parents = [];

let parent = h2ElemClassSubtitle.parentNode;

while (parent !== body) {
  parents.push(parent);
  parent = parent.parentNode;
}
console.log(parents);

//task4

const formElem = document.querySelector("form");
const formChildInput = document.querySelector("input");
const formChildButton = document.querySelector("button");

// formChildInput.addEventListener("input", (event) => {
//   const value = event.target.value;
//   console.log(value);
// });

formElem.addEventListener("submit", (event) => {
  event.preventDefault(); // предотвращает отправку стандартной формы.
  const errorMessage = document.createElement("h2");
  if (formChildInput.value == "") {
    errorMessage.textContent = "Поле не заполнено";
    errorMessage.style.border = "2px solid red";
  } else {
    errorMessage.textContent = "Данные отправлены на сервер";
    errorMessage.style.border = "2px solid green";
  }
  formElem.appendChild(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  }, 1000);
});
