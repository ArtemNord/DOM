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

const studentsGroup1PracticeTime = [
  {
    firstName: "Ivanov",
    practiceTime: 56,
  },
  {
    firstName: "Petrov",
    practiceTime: 120,
  },
  {
    firstName: "Sidorov",
    practiceTime: 148,
  },
  {
    firstName: "Belkin",
    practiceTime: 20,
  },
  {
    firstName: "Avdeev",
    practiceTime: 160,
  },
];

const studentsGroup2PracticeTime = [
  {
    firstName: "Mankov",
    practiceTime: 87,
  },
  {
    firstName: "Kristin",
    practiceTime: 133,
  },
  {
    firstName: "Kotlyarov",
    practiceTime: 140,
  },
  {
    firstName: "Peskov",
    practiceTime: 10,
  },
];

function findMax() {
  const values = arguments;
  let maxValue = -Infinity;

  for (let index = 0; index < values.length; index++) {
    if (values[index] > maxValue) maxValue = values[index];
  }
  return maxValue;
}

const group1PracticeTime = studentsGroup1PracticeTime.map(
  (student) => student.practiceTime
);
const group2PracticeTime = studentsGroup2PracticeTime.map(
  (student) => student.practiceTime
);

const maxTimeFromGroup1 = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1);
const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2);

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups);

// Rest

function findMaxRest(...values) {
  return values.reduce((acc, value) => {
    if (value > acc) return value;
    return acc;
  }, -Infinity);
}

const maxTimeFromGroup1Rest = findMaxRest(...group1PracticeTime);
console.log(maxTimeFromGroup1Rest);
const maxTimeFromGroup2Rest = findMaxRest(...group2PracticeTime);
console.log(maxTimeFromGroup2Rest);

const bothGroupsTimeRest = [...group1PracticeTime, ...group2PracticeTime];

const maxTimeBothGroupsRest = findMaxRest(...bothGroupsTime);
console.log(maxTimeBothGroupsRest);

const saveFullNameInDB = (firstName, lastName, ...additionals) => {
  saveFirstName(firstName);
  saveLastName(lastName);
  saveAdditionals(additionals); //дополнительный блок. благодаря рест мы смогли сохранить не ипользуемые значения.
};

// Коллекции ------------

const divElement = document.querySelector(".content");
console.log(divElement.childNodes.length);
console.log(divElement.children.length);

Array.from(divElement.childNodes).forEach((childNode) => {
  console.log(
    'childNode "%s" типа "%d"',
    childNode.nodeName,
    childNode.nodeType
  );
});

[...divElement.children].forEach((child) => {
  console.log('child "%s" типа "%d"', child.nodeName, child.nodeType);
});

// Методы навигации по DOM -----------

// const liEl = document.querySelectorAll(".menu__list");
// const liElOne = document.querySelector(".menu__list");
// const linkEl = document.querySelector(".menu__link");
// const menuEl = document.querySelector(".menu");

console.log(liElOne);
console.log(liElOne.lastElementChild);
console.log(liElOne.lastChild);

console.log(liElOne.parentElement.lastElementChild);
console.log(liElOne.parentElement.firstElementChild);
console.log(liElOne.lastElementChild.previousElementSibling);
