var APP_ID = 'gTetAbFKeg2VgSlMXf31bfH2-gzGzoHsz';
var APP_KEY = 'd418rWCgfsIOWKuA7y1Tf41g';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
  .then(function(messages) {
    let array = messages.map((item) => item.attributes )
    array.forEach((item) => {
      let li = document.createElement('li')
      li.innerText = `${item.name}：${item.content}`
      let messageList = document.querySelector('#messageList')
      messageList.appendChild(li)
    })
  })
  .then(function(todos) {
    // 更新成功
    console.log(todos)
  }, function(error) {
    // 异常处理
    console.log(error)
  });

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function(e) {
  e.preventDefault()
  let name = myForm.querySelector("input[name='name']").value
  let content = myForm.querySelector("input[name='content']").value
  // 创建表
  var Message = AV.Object.extend('Message');
  // 创建数据
  var messages = new Message();
  messages.save({
    name: name,
    content: content
  }).then(function(object) {
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}：${object.attributes.content}`
    console.log(1)
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
  })
})