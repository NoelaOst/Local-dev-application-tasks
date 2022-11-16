const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    observer: true, 
    observeParents: true,
    slidesPerView: "1",
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 400,
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    },
    keyboard: {
        enabled: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });