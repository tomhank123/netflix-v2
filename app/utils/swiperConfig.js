export default {
  spaceBetween: 16,
  slidesPerView: 3,
  // onSlideChange: () => console.log('slide change'),
  // onSwiper: swiper => console.log(swiper),
  loop: false,
  freeMode: true,
  breakpoints: {
    '@0.00': {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    '@0.75': {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    '@1.00': {
      slidesPerView: 7,
      spaceBetween: 12,
    },
    '@1.50': {
      slidesPerView: 7,
      spaceBetween: 16,
    },
  },
};
