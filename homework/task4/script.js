// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const input = document.querySelector("#from");

const changeSpan = () => {
  const header = document.querySelector("span");
  header.innerText = input.value;
};

input.addEventListener("input", changeSpan);

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const button = document.querySelector(".messageBtn");

button.addEventListener("click", showBloc);

function showBloc() {
  const message = document.querySelector(".message");
  message.setAttribute(
    "class",
    "message animate_animated animate_fadeInLeftBig"
  );
  message.style.visibility = "visible";
}

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const form = document.querySelector("form");
const firstInput = form.querySelector('input[type="text"]');
const secondInput = form.querySelector('select[class="form-control"]');
const formButton = form.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (firstInput.value === "" || secondInput.value === "") {
    if (firstInput.value === "" && secondInput.value === "") {
      firstInput.setAttribute("class", "form-control error");
      firstInput.style.borderColor = "red";
      secondInput.setAttribute("class", "form-control error");
      secondInput.style.borderColor = "red";
    } else if (secondInput.value === "") {
      secondInput.setAttribute("class", "form-control error");
      secondInput.style.borderColor = "red";
    } else {
      firstInput.setAttribute("class", "form-control error");
      firstInput.style.borderColor = "red";
    }
  } else if (firstInput.value !== "" || secondInput.value !== "") {
    if (firstInput.value !== "" && secondInput.value !== "") {
      firstInput.setAttribute("class", "form-control");
      firstInput.style.borderColor = "none";
      secondInput.setAttribute("class", "form-control");
      secondInput.style.borderColor = "none";
    } else if (secondInput.value === "") {
      secondInput.setAttribute("class", "form-control");
      secondInput.style.borderColor = "none";
    } else {
      firstInput.setAttribute("class", "form-control");
      firstInput.style.borderColor = "none";
    }
  }
});
