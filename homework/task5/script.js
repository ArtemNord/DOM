import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);
const contentDiv = document.querySelector(".content");
contentDiv.style.display = "flex";
contentDiv.style.flexWrap = "wrap";
contentDiv.style.flexDirection = "column";
contentDiv.style.alignContent = "center";
contentDiv.style.justifyContent = "center";
contentDiv.style.gap = "10px";

data.forEach(({ id, name, age, url }) => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.flexDirection = "column";
  div.style.marginRight = "10px";
  div.style.border = "1px solid";

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
