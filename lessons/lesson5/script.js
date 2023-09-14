const productsData = [
  {
    src: "img.png",
    alt: "img obj data",
    name: "Название из object data",
    link: "product.html",
    des: "Описание товара из object data",
    price: 21000,
  },
  {
    src: "img2.png",
    alt: "img obj data new photo",
    name: "Название из object data new product",
    link: "product2.html",
    des: "Описание new товара из object data",
    price: 11000,
  },
  {
    src: "img3.png",
    alt: "img obj data new photo3",
    name: "Название из object data new product3",
    link: "product3.html",
    des: "Описание new товара из object data3",
    price: 31000,
  },
];

const productBox = document.querySelector(".product-box");

productsData.forEach((productData) => {
  const productEl = document.createElement("div");
  productEl.classList.add("product");

  const productImg = document.createElement("img");
  productImg.classList.add("product__img");
  productImg.setAttribute("alt", productData.alt);
  productImg.src = productData.src;

  const productContent = document.createElement("div");
  productContent.classList.add("product__content");

  const productLink = document.createElement("a");
  productLink.href = productData.link;
  productLink.textContent = productData.name;

  const productText = document.createElement("p");
  productText.classList.add("product__text");
  productText.textContent = productData.des;

  const productPrice = document.createElement("p");
  productPrice.classList.add("product__price");
  productPrice.textContent = productData.price;

  productContent.appendChild(productLink);
  productContent.appendChild(productText);
  productContent.appendChild(productPrice);
  productEl.appendChild(productImg);
  productEl.appendChild(productContent);
  productBox.appendChild(productEl);
});
