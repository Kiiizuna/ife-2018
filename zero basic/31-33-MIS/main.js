const log = function() {
	console.log.apply(console, arguments)
}

const bindEvent = function(element, eventName, callback) {
	element.addEventListener(eventName, callback)
}

const bindAll = function(selector, eventName, callback) {
	var elements = document.querySelectorAll(selector)
	for (var i = 0; i < elements.length; i++) {
		var e = elements[i]
		bindEvent(e, eventName, callback)
	}
} 

// region-select的change事件 = function() {
//     渲染新的表格(根据select选项获取数据)
// }

// function 根据select选项获取数据() {
//     dosomething
//     返回数据
// }

// function 渲染新的表格(data) {
//     输出表头：商品、地区、1月、2月、…… 12月
//     遍历数据 {
//         输出每一行的表格HTML内容
//     }
//     把生成的HTML内容赋给table-wrapper
// }

// 所有绑定事件函数集合
var bindEvents = function() {
	bindAll('.class-input', 'click', getData)
		log('click')
}


var getData = function() {
	var inputs = document.getElementsByTagName('input')
	var checked = []
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i]
		if (input.checked) {
			checked.push(input)
		}
	}
	log('checked is', checked)
	return checked
}

// getData()




var __main = function() {
	bindEvents()
}

__main()
