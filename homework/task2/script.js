// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const allElemClassDropdownItem = document.querySelectorAll(".dropdown-item");
allElemClassDropdownItem.forEach((element) => {
  element.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const elemClassBtn = document.querySelector(".btn");
elemClassBtn.classList.forEach((element) => {
  if (element == "btn-secondary") {
    elemClassBtn.classList.remove("btn-secondary");
  } else {
    elemClassBtn.classList.add("btn-secondary");
  }
});

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const elemClassMenu = document.querySelector(".menu");
elemClassMenu.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divElemClassDropdown = document.querySelector("div", ".dropdown");
divElemClassDropdown.insertAdjacentHTML("afterend", `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const elemIdDropdownMenuButton = document.querySelector("#dropdownMenuButton");
elemIdDropdownMenuButton.setAttribute("id", "superDropdown");

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const elemAtributAriaLabelledby = document.querySelector(
  '[aria-labelledby="dropdownMenuButton"]'
);
elemAtributAriaLabelledby.setAttribute("data-dd", "3");

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const elemClassDropdownToggle = document.querySelector(".dropdown-toggle");
elemClassDropdownToggle.removeAttribute("type");
