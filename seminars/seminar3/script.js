// //task1

// document.querySelector(".myButton").onclick = function () {
//   console.log("Событие онклик");
// };

// //-----------------------

// window.onload = function () {
//   console.log("Страница прогрузилась");
// };

// window.addEventListener("load", () => {
//   console.log("Страница прогружена");
// });

// //task2

// const buttons = document.querySelectorAll(".buttonOn");

// // for (const button of buttons) {
// //   button.onclick = function () {
// //     console.log(`Нажата кнопка ${button.textContent}`);
// //   };
// // }

// // buttons.forEach((element) => {
// //   element.onclick = function () {
// //     console.log(`Нажата кнопка ${element.textContent}`);
// //   };
// // });

// document.querySelector(".button5").addEventListener("click", function () {
//   this.textContent = "Вы нажали на эту кнопку";
//   this.style.color = "white";
//   this.style.backgroundColor = "black";
// });

// // buttons.forEach((element) => {
// //   element.onclick = function () {
// //     if (element.textContent === "5") {
// //       element.textContent = "Вы нажали на эту кнопку";
// //     }
// //   };
// // });

// document.querySelector(".button5").addEventListener("click", function () {
//   this.innerText = "не поймаеш :)";
//   this.style.color = "red";
//   this.style.transition = "all 1s ease-in-out";
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   this.style.transform = `translate(${x}px, ${y}px)`;
//   this.disabled = true; //отключает функционал после срабатывания события, работает при "click"
// });

// //task3

// const buttonsOnJS = [
//   { id: "add", text: "добавить заголовок", clickHandler: addHeading },
//   { id: "remove", text: "удалить заголовок", clickHandler: removeHeading },
//   {
//     id: "hover",
//     text: "кнопка с наведением",
//     mouseoverHandler: handleHoverIn,
//     mouseoutHandler: handleHoverOut,
//   },
// ];

// function addHeading() {
//   const heading = document.createElement("h1");
//   heading.textContent = "Новый заголовок";
//   document.body.appendChild(heading);
// }

// function removeHeading() {
//   const heading = document.querySelector("h1");
//   if (heading) {
//     // не обязательно прописывать true дастаточно поместить в него елемент который хотим проверить.
//     heading.remove();
//   }
// }

// function handleHoverIn() {
//   console.log("Вы навели на данную кнопку");
// }

// function handleHoverOut() {
//   console.log("Вы убрали курсор с кнопки");
// }

// function createButtons() {
//   const btnContainer = document.querySelector("div");

//   buttonsOnJS.forEach((element) => {
//     const btn = document.createElement("button");
//     btn.id = element.id;
//     btn.textContent = element.text;
//     btnContainer.appendChild(btn);

//     if (element.clickHandler) {
//       btn.onclick = element.clickHandler;
//     }

//     if (element.mouseoverHandler) {
//       btn.onmouseover = element.mouseoverHandler;
//     }

//     if (element.mouseoutHandler) {
//       btn.onmouseout = element.mouseoutHandler;
//     }
//   });
// }

// createButtons();

//task4

document.querySelector("#add").addEventListener("click", addListItem);

document
  .querySelector("#remove")
  .addEventListener("click", removeFirstListItem);

document.querySelector("#addClass").addEventListener("click", addClassItem);

function addListItem() {
  const list = document.querySelector("#list");
  const newItem = document.createElement("li");
  newItem.textContent = "Новый элемент";
  list.appendChild(newItem);
}

function removeFirstListItem() {
  const list = document.querySelector("#list");
  if (list.firstElementChild) {
    list.firstElementChild.remove();
  }
}

function addClassItem() {
  this.classList.add("click");
}
