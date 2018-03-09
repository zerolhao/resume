!function(){
  // 三个特殊块上浮特效
  // 添加 toTop class
  let specialTags = document.querySelectorAll('[data-offsetTop]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offsetTop')
  }


  setTimeout(autoHightLight, 1000) // 刷新页面时自动高亮&指定块上浮效果
  //autoHightLight()

  // 拨动滚轮时
  window.addEventListener('scroll', () => {
    autoHightLight()
  })


  function autoHightLight() {
    let specialTags = document.querySelectorAll('[data-offsetTop]') // 获得特定元素集合
    let minIndex = 0 // 设置下标
    // 获得距离视口顶部最近的元素下标
    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }

    // 给距离视口顶部最近的块去除 toTop class
    specialTags[minIndex].classList.remove('offsetTop') //上浮特效结束

    let id = specialTags[minIndex].id // 获得id
    let a = document.querySelector('a[href="#' + id + '"]') // 获得对应a标签
    let li = a.parentNode // 获得对应li标签
    let brotherSiblings = li.parentNode.children // 获得所有兄弟元素
    // 取消所有兄弟元素的高亮
    for (let i = 0; i < brotherSiblings.length; i++) {
      brotherSiblings[i].classList.remove('hightlight')
    }
    li.classList.add('hightlight')
  }
}.call()