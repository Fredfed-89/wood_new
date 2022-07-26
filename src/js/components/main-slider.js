import Swiper from 'swiper/bundle';

const newSwiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 20,
  loop: false,
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
      slidesPerView: 2,
    },
    1170: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
