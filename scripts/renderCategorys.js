export function renderCategorys() {
  const categorysContainer = document.querySelector("#categorys-container");

  getCategorys();

  async function getCategorys() {
    const response = await fetch("../data/categorys.json");
    const categorysArray = await response.json();

    renderCategorys(categorysArray);
  }

  function renderCategorys(categorysArray) {
    categorysArray.forEach(function (item) {
      const categoryHTML = ` <div class="swiper-slide">
                <article class="product" data-id="${item.id}">
                  <img src="images/${item.imgSrc}" alt="burger" class="product-image"/>
                  <div class="product-rating">${item.rating}</div>          
                  <h4 class="product-title">${item.title}</h4>
                  <p class="product-price">$${item.price}</p>
                  <button class="product-add" type="button">${item.add}</button>
                </article>
              </div>`;
      categorysContainer.insertAdjacentHTML("beforeend", categoryHTML);
    });
  }
}
