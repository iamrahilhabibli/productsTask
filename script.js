const mainContainer = document.querySelector(".main__container");
console.log(mainContainer);

function renderProducts() {
  data.forEach((data) => {
    const productsData = generateProduct(data);
    mainContainer.appendChild(productsData);
  });
}

// function redirectPage() {
//   window.open(
//     `/Users/rahilhabibli/Desktop/productsTask/product.html?id=${data.id}`
//   );
// }

function generateProduct(data) {
  const card = document.createElement("div");
  card.innerHTML = `<div class="card">
  <span>${data.id}</span>
  <img src="${data.image}" alt="">
  <p>${data.name}</p>
  <span>${data.price}</span>
</div>  `;

  card.addEventListener("click", () => {
    window.open(
      `/Users/rahilhabibli/Desktop/productsTask/product.html?id=${data.id}`
    );
  });

  // card.addEventListener("click", redirectPage);

  return card;
}

renderProducts();
