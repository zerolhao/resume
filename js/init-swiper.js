/* MVC 之前
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })*/
// MVC 之后
!function(){
  var view = document.querySelector('#slides')

  var controller = {
    view: null,
    swiper: null,
    swiperOptions: {
      direction: 'horizontal',
      loop: true,
      pagination: {el: '.swiper-pagination'},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    init: function(view){
      this.view = view
      this.initSwiper()
    },
    initSwiper: function(){
      this.swiper = new Swiper(
        this.view.querySelector('.swiper-container'),
        this.swiperOptions)
    }
  }

  controller.init(view)
}.call()
