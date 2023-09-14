const usersData = JSON.parse(data);
console.log(usersData);

const contentEl = document.querySelector(".content");
contentEl.textContent = `Это данные из json ${usersData.sammy.username}`;
