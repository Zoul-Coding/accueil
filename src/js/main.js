const mySwiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }, 
});

mySwiper.on('slideChange', function(){

  gsap.fromTo(".animT", {autoAlpha: 0, y: 30}, {autoAlpha: 1, duration: 1, y: 0, delay: 0.5})
  gsap.fromTo(".animP", {autoAlpha: 0, y: 30}, {autoAlpha: 1, duration: 1, y: 0, delay: 0.6})
  gsap.fromTo(".animB", {autoAlpha: 0, y: 30}, {autoAlpha: 1, duration: 1, y: 0, delay: 0.7})

});