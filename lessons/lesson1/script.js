const listElem = document.getElementsByClassName("list");
console.log(listElem);

const listElemQS = document.querySelectorAll(".list");
console.log(listElemQS);

const heading3 = document.querySelector("#heading");
console.log(heading3);

const heading = document.querySelector(".title");
const text = document.querySelectorAll(".text");
// text.forEach((element) => {
//   console.log(element);
// });

// const paragraphElement = document.createElement("h3");
// paragraphElement.textContent = "Мой новый заголовок";

// const sectionElement = document.querySelector("section");
// sectionElement.appendChild(paragraphElement);
// const paragraphElementText = document.createElement(
//   "Содержимое текстовой ноды"
// );
// paragraphElement.appendChild(paragraphElementText);

heading.textContent = "from JS in Love"; //поменял заголовок из JS

// parentNode.removeChild(child); // удаление наследуемого елемента
// Element.remove(); // более простой способ удаления

const heading2 = document.querySelector("#heading");
heading2.remove();

const buttonEl = document.querySelector(".btn");
const contentEl = document.querySelector(".content");
const imgEl = document.querySelector(".img");

const textEl = document.createElement("p");
textEl.textContent = "Тут любой текс и его много";

console.log(buttonEl);
buttonEl.onclick = function () {
  buttonEl.textContent = "Товар в корзине";
  contentEl.appendChild(textEl);
};

imgEl.onclick = function () {
  imgEl.src = "newphoto.jpg";
};
