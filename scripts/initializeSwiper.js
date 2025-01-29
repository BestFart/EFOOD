export function initializeSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

