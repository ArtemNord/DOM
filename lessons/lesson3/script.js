const buttonElem = document.querySelector(".button");
const buttonElems = document.querySelectorAll(".button");

// let count = 0;

// const click = function () {
//   console.log("Click JS button");
//   count++;
//   console.log(`Кликов по кнопке ${count}`);
// };

// buttonElem.addEventListener("click", click);

// buttonElem.addEventListener("click", function () {
//   console.log("click add");
// });

// buttonElem.addEventListener("click", function () {
//   console.log("click add two");
// });

buttonElems.forEach((element) => {
  element.addEventListener("click", function (event) {
    const target = event.target;
    console.log(target);
  });
});

const menuElem = document.querySelector(".menu");

const nameFunction = (e) => {
  console.log(e.target, e.currentTarget);
};

menuElem.addEventListener("click", nameFunction);

//----------------------------

window.addEventListener("load", function (e) {
  console.log("все загрузилось");
});

document.addEventListener("DOMContentLoaded", function (e) {
  console.log("loaded");
});

//--------------------

const buttonEl = document.querySelector(".button-over");

buttonEl.addEventListener("mouseover", function (e) {
  console.log("Не нужно наводить, ты лучше нажми");
});

buttonEl.addEventListener("mouseleave", function (e) {
  console.log("Не нужно убегать");
});

//-------------------------

window.addEventListener("keydown", function (e) {
  console.log(e);
});

// keyup, keypress
//-------------------------

const link = document.querySelector(".link");

link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hello link");
});

//---------------------------

document.addEventListener("copy", function (e) {
  const copyText = document.getSelection().toString();
  console.log(copyText);
});

//---------------------------

window.addEventListener("resize", function (e) {
  console.log("resize");
});

//---------------------------

const inputElem = document.querySelector("input");

inputElem.addEventListener("input", function (e) {
  if (Number(e.target.value) === 123) {
    console.log("Верно");
  } else {
    console.log("Не угодал");
  }
});

//-----------------------------

const inputText = document.querySelector("input");
const formRun = document.querySelector("form");
const errorEl = document.querySelector(".error");

formRun.addEventListener("submit", function (e) {
  if (inputText.value === "") {
    e.preventDefault();
    errorEl.textContent = "Поле не должно быть пустым";
  }
});
