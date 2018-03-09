autoSticky() // sticky navbar 刷新页面时并不一定是从开始位置显示
function autoSticky() {
  if (window.scrollY !== 0) {
    siteTopNavBar.classList.add('sticky')
  } else {
    siteTopNavBar.classList.remove('sticky')
  }
}