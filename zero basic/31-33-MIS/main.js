const log = function() {
	console.log.apply(console, arguments)
}

const e = function(selector) {
	return document.querySelector(selector)
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


// 分开获取用户选择的数据, 一开始是地区和商品放在一个数组里
var getData = function() {
	var regionFrom = e('.region')
	var productFrom = e('.product')
	var inputs = document.getElementsByTagName('input')
	var regionChecked = []
	var productChecked = []
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i]
		if (input.checked === true && input.parentElement === regionFrom) {
			regionChecked.push(input)
		} else if (input.checked === true && input.parentElement === productFrom){
			productChecked.push(input)
		}
	}
	log('regionChecked one is', regionChecked)
	log('productChecked one is', productChecked)
	return regionChecked, productChecked
}

var templateTableHead = function() {
	var t = `
		<table border='1'>
			<tr>
				<th>商品</th>
				<th>地区</th>
				<th>一月份</th>
				<th>二月份</th>
				<th>三月份</th>
				<th>四月份</th>
				<th>五月份</th>
				<th>六月份</th>
				<th>七月份</th>
				<th>八月份</th>
				<th>九月份</th>
				<th>十月份</th>
				<th>十一月份</th>
				<th>十二月份</th>
			</tr>
		</table>
	`
	return t
}

// log('sourceData', sourceData)


var __main = function() {
	bindEvents()
}

__main()


