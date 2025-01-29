export function initializeSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 5,
        spaceBetween: 46,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

