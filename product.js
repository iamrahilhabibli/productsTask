const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");

const params = new URLSearchParams(location.search);
const id = parseInt(params.get("id"));

const products = data.find((x) => x.id == id);
productName.innerText = products.name;
productPrice.innerText = products.price;
