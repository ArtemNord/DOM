const div = document.querySelector("div");
console.log(div);
console.log(div.firstElementChild);

const www = document.querySelector(".www");
console.log(www);

const www1 = document.querySelector("#block p:first-child");
console.log(www1);

const allElem = document.querySelectorAll(".www");
console.log(allElem[0]);

const link = document.querySelector(".link");
link.innerText = "link text JS";
link.href = "https://github.com/Naganishe/DOM";
link.setAttribute("href", "https://yandex.ru");
console.log(link);

const img = document.querySelector(".photo");
img.src =
  "https://virtus-img.cdnvideo.ru/images/as-is/plain/4a/4ae3c095-f50a-4d64-95db-3739e78dbf6f.png@jpg";
img.setAttribute(
  "src",
  "https://cs14.pikabu.ru/post_img/big/2021/07/29/7/1627557537169274027.jpg"
);
// img.width = 300;

const secondDiv = document.querySelector(".content");
const p = document.createElement("p");

secondDiv.appendChild(p);

p.innerText = "<span>Какой то текст</span>";
// p.innerHTML = "<span>Какой то текст</span>"  //Теги спан пропадут.

// secondDiv.remove(p);

const button = document.createElement("button");
secondDiv.appendChild(button);
button.textContent = "Нажми на меня";
console.log(button);
button.style.margin = "100px";

let clickCount = 0;
button.onclick = function () {
  clickCount++;
  console.log(`Количество ${clickCount}`);
};

button.textContent = "Отправить";
button.onclick2 = function () {
  button.textContent = "Текст отправлен";
  setTimeout(() => {
    button.textContent = "Отправить";
  }, 2000);
};
