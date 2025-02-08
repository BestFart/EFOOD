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
                  <div class="product-rating">
                    <input type="radio" id="radio1" name="rating"/>
                    <label for="radio1"></label>
                    <input type="radio" id="radio2" name="rating"/>
                    <label for="radio2"></label>
                    <input type="radio" id="radio3" name="rating"/>
                    <label for="radio3"></label>
                    <input type="radio" id="radio4" name="rating"/>
                    <label for="radio4"></label>
                    <input type="radio" id="radio5" name="rating"/>
                    <label for="radio5"></label>
                  </div>
                  <h4 class="product-title">${item.title}</h4>
                  <p class="product-price">$${item.price}</p>
                  <button class="product-add" type="button">${item.add}</button>
                </article>
              </div>`;
      categorysContainer.insertAdjacentHTML("beforeend", categoryHTML);
    });
  }
}
