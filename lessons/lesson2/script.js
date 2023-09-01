const content = document.querySelector(".content");

const h1El = document.createElement("h1");
h1El.textContent = "h1Element";
h1El.setAttribute("class", "heading");

const imgEl = document.createElement("img");
imgEl.src = "photo.png";
imgEl.setAttribute("alt", "cool img");

content.appendChild(h1El);
content.appendChild(imgEl);

//--------------------------------------------

const liEl = document.querySelectorAll(".menu__list");
const liElOne = document.querySelector(".menu__list");
const linkEl = document.querySelector(".menu__link");
const menuEl = document.querySelector(".menu");

// console.log(liEl);
// console.log(liElOne.parentNode.children);

// console.log(linkEl.children);
// console.log(linkEl.childNodes);

// console.log(menuEl.children);
// console.log(menuEl.childNodes);

menuEl.childNodes.forEach((element) => {
  console.log(element);
});

// Spred, rest operators
