// active navbar and show submenubar
/*  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function(e) {
      e.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(e) {
      e.currentTarget.classList.remove('active')
    }
  }*/
! function() {
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    init: function(view) {
      this.view = view
    },
    bindEvents: function() {
      var liTags = this.view.querySelectorAll('ul > li')
      for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = this.active // 注意这里this的指向
        liTags[i].onmouseleave = this.deactive
      }
    },
    active: function(e){
      e.currentTarget.classList.add('active')
    },
    deactive: function(e){
      e.currentTarget.classList.remove('active')
    }
  }

  controller.init(view)
}