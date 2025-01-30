export function search() {
   document.querySelector(".search__btn").addEventListener("click", function () {
    document.querySelector(".search-box").classList.toggle("active");
  });
}
