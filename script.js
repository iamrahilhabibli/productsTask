const mainContainer = document.querySelector(".main__container");

function renderProducts() {
  data.forEach((data) => {
    const productsData = generateProduct(data);
    mainContainer.appendChild(productsData);
  });
}

function redirectPage() {
  window.open(`file:///C:Users/rahilahDesktop/front-task2product.html`);
}

function generateProduct(data) {
  const card = document.createElement("div");
  card.classList.add = "card";
  card.innerHTML = `<div class="card">
  <span>${data.id}</span>
  <img src="${data.image}" alt="">
  <p>${data.name}</p>
  <span>${data.price}</span>
</div>  `;

  card.addEventListener("click", redirectPage);

  return card;
}

renderProducts();
