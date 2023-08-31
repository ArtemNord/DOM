const content = document.querySelector(".content");

const h1El = document.createElement("h1");
h1El.textContent = "h1Element";
h1El.setAttribute("class", "heading");

const imgEl = document.createElement("img");
imgEl.src = "photo.png";
imgEl.setAttribute("alt", "cool img");

content.appendChild(h1El);
content.appendChild(imgEl);
