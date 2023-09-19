const audioElem = document.querySelector(".audio");

audioElem.addEventListener("play", function (e) {
  console.log("Вы нажали аудио плей");
});

audioElem.addEventListener("pause", function () {
  console.log("Вы нажали паузупше");
});
