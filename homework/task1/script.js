// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const findElementOnID = document.getElementById("super_link");
console.log(findElementOnID);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const classCardLinkAll = document.querySelectorAll(".card-link");
classCardLinkAll.forEach((element) => {
  element.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const findElementClassCardLinkInCradBody = document.querySelectorAll(
  ".card-body .card-link"
);
console.log(findElementClassCardLinkInCradBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const findFirstElementDataNumber = document.querySelector(
  '[data-number = "50"]'
);
console.log(findFirstElementDataNumber);

// 5. Выведите содержимое тега title в консоль.

const titleElement = document.querySelector("title");
console.log(titleElement);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const classCardTitleElement = document.querySelector(".card-title");
console.log(classCardTitleElement.parentElement);

// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const classElemetnCard = document.querySelector(".card");
const p = document.createElement("p");
p.innerText = "Привет";
classElemetnCard.prepend(p);

// 8. Удалите тег h6 на странице.

const classCardBody = document.querySelector(".card-body");
const h6 = document.querySelector("h6");
classCardBody.removeChild(h6);
