// const outerDiv = document.querySelector(".outer");
// const innerDiv = document.querySelector(".inner");
// const button1 = document.querySelector(".myButton1");
// const button2 = document.querySelector(".myButton2");

// outerDiv.addEventListener("click", function (event) {
//   console.log("Внешний div");
// });

// innerDiv.addEventListener("click", function (event) {
//   console.log("Внутренний div");
// //   event.stopImmediatePropagation();
// });

// button1.addEventListener("click", function (event) {
//   console.log("Кнопка 1");
// });

// button2.addEventListener("click", function (event) {
//   console.log("Кнопка 2");
//   //   event.stopPropagation();
// });

import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);
const contentDiv = document.querySelector(".content");

data.forEach(({ id, name, age, url }) => {
  const div = document.createElement("div");
  div.style.display = "inline-block";
  div.style.marginRight = "10px";
  div.style.gap = "10px";

  div.classList.add("card");

  const img = document.createElement("img");
  img.classList.add("card-top");
  img.src = url;
  img.style.maxWidth = "500px";
  img.style.maxHeight = "500px";

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const idPara = document.createElement("p");
  idPara.classList.add("card-text");
  idPara.textContent = `id: ${id}`;

  const title = document.createElement("h5");
  title.classList.add("card-titkle");
  title.textContent = name;

  const subtitle = document.createElement("h6");
  subtitle.classList.add("card-subtitle");
  subtitle.textContent = age;

  contentDiv.appendChild(div);
  div.appendChild(img);
  div.appendChild(cardInfo);
  cardInfo.appendChild(idPara);
  cardInfo.appendChild(title);
  cardInfo.appendChild(subtitle);
});
