/*autoSticky() // sticky navbar 刷新页面时并不一定是从开始位置显示
function autoSticky() {
  if (window.scrollY !== 0) {
    siteTopNavBar.classList.add('sticky')
  } else {
    siteTopNavBar.classList.remove('sticky')
  }
}*/
!function() {
  var view = document.querySelector('#siteTopNavBar')
  var controller = {
    view: null,
    init: function(view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function() {
      this.userDoScroll()
      window.addEventListener('scroll',()=>{
        this.userDoScroll()
      })// 箭头函数没有this，自动引用外层的this
      
      // 注意this指向，下面这样写this就会变成指向window
      //window.addEventListener('scroll', this.userDoScroll) // 等于下面
      //window.onscroll = function(){...}
      
      //或者使用 bind 绑定this 
      // window.addEventListener('scroll',this.userDoScroll.bind(this))
    },
    userDoScroll: function(){
      if (window.scrollY !== 0) {
        this.active()
      } else {
        this.deactive()
      }
      //console.log(this)
    },
    active: function(){
      this.view.classList.add('sticky')
    },
    deactive: function(){
      this.view.classList.remove('sticky')
    }
  }

  controller.init(view)
}.call()