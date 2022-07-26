import Swiper from 'swiper/bundle';

const newSwiper = new Swiper('.swiper', {
  // direction: 'horizontal',
  slidesPerView: "auto",
  centeredSlides: false,
  // slidesPerGroup: 1,
  spaceBetween: 20,
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,

    },

    768: {
      slidesPerView: 1,
    },

    992: {
      spaceBetween: 10,
      slidesPerView: 1,
      // centeredSlides: true,
    },

    1170: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
