/*var APP_ID = 'gTetAbFKeg2VgSlMXf31bfH2-gzGzoHsz';
var APP_KEY = 'd418rWCgfsIOWKuA7y1Tf41g';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
  .then(function(messages) {
    let array = messages.map((item) => item.attributes)
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
  })*/

  ! function() {
    var view = View('section.message')

    var model = Model({resourceName: 'Message'})

    var controller = Controller({
      init: function(view,model) {
        this.form = view.querySelector('#postMessageForm')
        this.messageList = view.querySelector('#messageList')
        this.loadMessage()
      },
      bindEvents: function(){
        this.form.addEventListener('submit', (e)=> {
          e.preventDefault()
          this.saveMessage()
        })
      },
      loadMessage: function(){
          this.model.fetch()
          .then(function(messages) {
            let array = messages.map((item) => item.attributes)
            array.forEach((item) => {
              let li = document.createElement('li')
              li.innerText = `${item.name}：${item.content}`
              let messageList = document.querySelector('#messageList')
              messageList.appendChild(li)
            })
          });
      },
      saveMessage: function() {
        let name = this.form.querySelector("input[name='name']").value
        let content = this.form.querySelector("input[name='content']").value
        // 检测用户是否输入
        var len = 0
        let nameArr = name.split('')
        nameArr.forEach((ele)=>{if(ele === '\u0020'){len++} })
        if(len === nameArr.length){
          alert('请输入昵称和内容！')
          return
        }
        len = 0
        let contentArr = content.split('')
        contentArr.forEach((ele)=>{if(ele === '\u0020'){len++} })
        if(len === contentArr.length){
          alert('请输入昵称和内容！')
          return
        }
        /*if(!name || !content){
          alert('请输入昵称和内容！')
          return
        }*/
        this.model.save({'name': name, 'content': content})
          .then(function(object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}：${object.attributes.content}`
            this.messageList.appendChild(li)
          })
        this.form.querySelector("input[name='content']").value = ''
      }
    })

    controller.init(view,model)
  }.call()