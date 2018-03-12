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