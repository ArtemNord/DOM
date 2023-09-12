const checkbox = document.querySelector("#agree");
const submitBtn = document.querySelector(".button");
const body = document.querySelector("body");
const div = document.querySelector(".message");

submitBtn.addEventListener("click", clickTheButton);

function clickTheButton() {
  if (!checkbox.checked) {
    div.textContent = "Необходимо согласиться с условием";
    div.style.color = "red";
  } else {
    div.textContent = "Согласились";
    div.style.color = "green";
  }
}

//-------------------------------------

const teaBtn = document.querySelector("input[value='tea'");
const coffeeBtn = document.querySelector("input[value='coffee']");
const drinkBtn = document.querySelector(".drinkButton");

drinkBtn.addEventListener("click", () => {
  if (teaBtn.checked) {
    alert("Чай закончился");
  } else if (coffeeBtn.checked) {
    alert("Coffee закончился");
  }
});

//---------------------------------------
