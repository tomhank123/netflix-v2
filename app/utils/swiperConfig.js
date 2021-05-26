export default {
  spaceBetween: 16,
  slidesPerView: 3,
  // onSlideChange: () => console.log('slide change'),
  // onSwiper: swiper => console.log(swiper),
  loop: true,
  freeMode: false,
  breakpoints: {
    '@0.00': {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    '@0.75': {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    '@1.00': {
      slidesPerView: 4,
      spaceBetween: 12,
    },
    '@1.50': {
      slidesPerView: 6,
      spaceBetween: 16,
    },
  },
};
