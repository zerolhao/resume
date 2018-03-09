/*  这个块里 // 注释的代码为不用 tween.js的更早版本的代码
// auto scroll smoothly
let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
  aTags[i].onclick = function(e) {
    e.preventDefault()
    //let a = e.currentTarget
    //let href = a.getAttribute('href')
    //let element = document.querySelector(href)
    //let top = element.offsetTop
    
    let targetTop = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop - 70
    let currentTop = window.scrollY
    
    //let n = 30  // 一共动多少次
    //let distance = (targetTop - currentTop)/n
    //let duration = 500/n  // 多少时间动一次
    //let i = 1
    //let id = setInterval(()=>{
    //  if(i === n){
    //    clearInterval(id)
    //  }
    //  window.scrollTo(0, currentTop + distance * i)
    //  i += 1
    //}, duration)

    // 使用 tween.js
    var coords = { y: currentTop }
    var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
      .to({ y: targetTop }, 500)
      .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
      .onUpdate(function() { // Called after tween.js updates 'coords'.
        window.scrollTo(0, coords.y)
      })
      .start(); // Start the tween immediately.
  }
}
// tween.js相关
// Setup the animation loop.
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);
*/
! function() {
  var view = document.querySelector('nav.menu')

  var controller = {
    view: null,
    init: function(view) {
      this.view = view
      this.initAnimate()
      this.bindEvents()
    },
    initAnimate: function() {
      // tween.js相关
      // Setup the animation loop.
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    bindEvents: function() {
      var aTags = this.view.querySelectorAll('ul > li > a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function(e) {
          e.preventDefault()
          let targetTop = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop - 70
          let currentTop = window.scrollY
          // 使用 tween.js
          var coords = { y: currentTop }
          var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y: targetTop }, 500)
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function() { // Called after tween.js updates 'coords'.
              window.scrollTo(0, coords.y)
            })
            .start(); // Start the tween immediately.
        }
      }
    }
  }

  controller.init(view)
}.call()