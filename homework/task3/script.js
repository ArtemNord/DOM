// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener(
  "DOMContentLoaded",
  console.log("все теги прогрузились")
);

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", console.log("страница загрузилась"));

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const bodyElem = document
  .querySelector("body")
  .addEventListener("click", showChildrenClass);

function showChildrenClass(event) {
  const eventElem = event.target;
  const eventElemTag = eventElem.tagName.toLowerCase();
  if (eventElem.classList.contains("super_element")) {
    console.log(
      `Класс 'super_element' присутствует в элементе ${eventElemTag}.`
    );
  } else {
    console.log(`Класс 'super_element' нет в элементе ${eventElemTag}.`);
  }
}

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

document
  .querySelector("textarea")
  .addEventListener("mouseover", onmouseoverTextarea);

function onmouseoverTextarea() {
  console.log("Вы навели на textarea.");
}

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulElem = document
  .querySelector("ul")
  .addEventListener("click", showTextButton);

function showTextButton(event) {
  const eventElem = event.target;
  if (eventElem.tagName === "BUTTON") {
    console.log(eventElem.textContent);
  }
}

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Ответ: При наступлении события обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее, вверх по цепочке вложенности.
//        Так как в пятом задании мы работаем с <ul>, а в третьем c <body>, наступление события происходит с нижнего элемента <ul> затем поднимается выше до <body>.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liElems = document.querySelectorAll("li");

for (let index = 0; index < liElems.length; index++) {
  if (index % 2 === 1) {
    liElems[index].lastElementChild.style.backgroundColor = "green";
  }
}
