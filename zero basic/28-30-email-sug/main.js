const log = function() {
	console.log.apply(console, arguments)
}

const inputDom的输入监听 = function() {
    var li = ''
    var val = ''
    // var list = []
    // 获取用户输入
    getInput()
    // 生成提示框中的提示内容
    // 将提示内容添加到email-sug-wrapper中
    // 控制email-sug-wrapper的显示/隐藏状态
}
inputDom的输入监听()

function getInput() {
    // var val = '' 在这定义, 后面引用会报错
	  // 获取用户输入()
    // 拿到input输入框的输入内容trim后返回
    var emailInput = document.querySelector('#email-input')
    log('emailInput is', emailInput)
    emailInput.addEventListener('keyup',function(){
   		log('keyup')
      var rawValue = emailInput.value
      val = rawValue.trim()
      log('val is', val)
      生成提示框中的提示内容()
      控制ul的显示或者隐藏状态()
   })
   //  emailInput.addEventListener('keypress',function(){
   // 		log('keypress')
   // })
   //  emailInput.addEventListener('keydown',function(){
   // 		log('keydown')
   // })
   //  emailInput.addEventListener('oninput',function(){
   // 		log('oninput')
   // })
}

function 生成提示框中的提示内容() {
    // 获取用户输入
    var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
    var len = postfixList.length
    var l = ''
    var list = []
    for (var i = 0; i < len; i++) {
        l = val + '@' + postfixList[i]
        li = `<li>${l}</li>`
        log('li is ', li)
        list.push(li)
        log('list arr ', list)
        // 将提示内容添加到ul中()
    }
    var ulWrapper = document.querySelector('#email-sug-wrapper')
    ulWrapper.innerHTML = ''
    for (var i = 0; i < list.length; i++) {
      ulWrapper.insertAdjacentHTML('beforeend', list[i])   
    }
    // 将提示内容添加到ul中() 
    // 遍历postfixList {
    //     把用户输入和每一个postfix进行结合成为每一个Li
    // }
    // 返回生成的提示内容
}

function 将提示内容添加到ul中() {
    var ulWrapper = document.querySelector('#email-sug-wrapper')
    ulWrapper.innerHTML = ''
    for (var i = 0; i < list.length; i++) {
      ulWrapper.insertAdjacentHTML('beforeend', list[i])   
    }
    // email-sug-wrapper
    // 获取生成提示框中的提示内容
    // 将内容添加到email-sug-wrapper中
    // 该函数没有调用
}

function 控制ul的显示或者隐藏状态() {
  if (val === '') {
    隐藏提示框()
  } else {
    显示提示框()
  }
    // ul email-sug-wrapper
    // if 用户输入为空 {
    //     隐藏提示框
    // } else {
    //     显示提示框
    // }

}

function 隐藏提示框() {
  var ulWrapper = document.querySelector('#email-sug-wrapper')
  ulWrapper.classList.add('hide')
    // 做具体隐藏提示框的操作
}

function 显示提示框() {
  var ulWrapper = document.querySelector('#email-sug-wrapper')
  ulWrapper.classList.remove('hide')
  ulWrapper.classList.add('show')
    // 做具体显示提示框的操作
}