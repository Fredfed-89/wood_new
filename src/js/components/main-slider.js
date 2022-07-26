import Swiper from 'swiper/bundle';

const newSwiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5040,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      spaceBetween: 5,
      slidesPerView: 2,
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
