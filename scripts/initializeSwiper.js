export function initializeSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      920: {
        slidesPerView: 4,
        // spaceBetween: 46,
      },
      1024: {
        slidesPerView: 5,
        // spaceBetween: 46,
      },
    },
  });
}
