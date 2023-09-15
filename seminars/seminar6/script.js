async function fetchData() {
  try {
    const response = await fetch("data.json");
    // console.log(response);
    if (!response.ok) {
      throw new Error("Не удалось получить данные с data json");
    }
    const data = await response.json();
    // console.log(data);
    const productBox = document.querySelector(".product__box");

    data.forEach(({ name, image, price, color, size, quantiti }) => {
      const product = `    
            <div class="product">
            <button class="btn__del">Удалить</button>
            <div class="content">
                <img class="product__img" src="${image}" alt="${name}">
                <div class="product__desc">
                    <h2 class="product__name">${name}</h2>
                    <p class="product__price-label">Price: <span class="product__price">$${price}</span> </p>
                    <p class="product__color">Color:${color}</p>
                    <p class="product__size">Size:${size}</p>
                    <div class="product__qty">
                        <label class="input__label">Quantiti:</label>
                        <input type="text" class="input__quantiti" value="${quantiti}">
                    </div>
                </div>
            </div>
        </div>`;
      productBox.insertAdjacentHTML("beforeend", product);
    });

    const btns = document.querySelectorAll(".btn__del");
    btns.forEach((el) => {
      el.addEventListener("click", () => {
        const product = el.closest(".product");
        product.remove();
      });
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
