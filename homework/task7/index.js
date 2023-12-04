async function fetchData () {
    try {
        const response = await fetch('data.json');
        if(!response.ok) {
            throw new Error('Не удалось получить данные с data JSON');
        }
        const data = await response.json();
        const productBox = document.querySelector('.catalog__product-cards');

        data.forEach(({product_url, image, name, description, price}) => {
            const productEl = `
            <div class="product">
                <div class="product__image">
                    <img src="${image}" alt="${name}" class="product__img" />
                    <div class="product__buy-me-box">
                        <div class="product__buy-me-cover">
                            <div class="product__buy-me-button">
                                <img src="img/add_to_cart.png" alt="add_to_cart"/>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="${product_url}" class="product__content">
                    <h3 class="product__name">${name}</h3>
                    <p class="product__description">${description}</p>
                    <p class="product__price">$${price}</p>
                </a>
            </div>`;
        productBox.insertAdjacentHTML('beforeend', productEl)
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();

const productsDiv = document.querySelector('.catalog__product-cards');
productsDiv.addEventListener('click', function (event) {
    const selectedProduct = event.target.closest('.product');

    const image = selectedProduct.querySelector('.product__img').getAttribute('src');
    const name = selectedProduct.querySelector('.product__name').textContent;
    const price = selectedProduct.querySelector('.product__price').textContent;

    const productBox = document.querySelector('.cart__product-box');
    const productCard =  `
        <div class="product-item">
            <button class="product-item__btn-del">Удалить</button>
            <div class="product-item__content">
                <img class="product-item__img" src="${image}" alt="${name}">
                <div class="product-item__desc">
                    <h2 class="product-item__name">${name}</h2>
                    <p class="product-item__price_label">Price: <span class="product-item__price">$${price}</span></p>
                    <p class="product-item__color_label">Color: Red</p>
                    <p class="product-item__size_label">Size: M</p>
                    <div class="product-item__qty">
                        <label class="product-item__input-label">Quantity: </label>
                        <input type="text" class="product-item__input-quantity" value="1">
                    </div>
                </div>
            </div>
        </div>`;
    productBox.insertAdjacentHTML('beforeend', productCard);

    const cart = document.querySelector('.cart');
    if (cart.style.display !== "block") {
        cart.style.display = "block";
    };

    const btns = document.querySelectorAll('.product-item__btn-del');
    btns.forEach((el) => {
        el.addEventListener('click', () => {
            const product = el.closest('.product-item');
            product.remove();
            if (!document.querySelector('.product-item')) {
                cart.style.display = "none";
            }
        })
    });
});
