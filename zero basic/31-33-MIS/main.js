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

const appendHTML = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
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

// var regionChecked = []
// var productChecked = []


// 表头模板
var templateTableHead = function() {
	var t = `
		<table class='table' border='1'>
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

var templateTableRow = function(input, product) {
	var region = input.dataset.region
	var t = `
		<tr>
			<td>${product}</td>
			<td>${region}</td>
			<td>1</td>
			<td>2</td>
			<td>33</td>
			<td>44</td>
			<td>55</td>
			<td>6</td>
			<td>7</td>
			<td>888</td>
			<td>99</td>
			<td>10</td>
			<td>111</td>
			<td>12</td>				
		</tr>
	`
	return t
}

var insertTableHeader = function() {
	var tableDiv = e('#table-wrapper')
	tableDiv.innerHTML = ''
	var tableHeader = templateTableHead()
	appendHTML(tableDiv, tableHeader)
}

var insertTableRow = function(sourceData, selectedRegion) {
	var table = e('.table')
	for (var i = 0; i < selectedRegion.length; i++) {
		for (var j = 0; j < sourceData.length; j++) {
			var selectedRegionOne = selectedRegion[i].dataset.region
			if( selectedRegionOne === sourceData[j].region) {
				var specificProduct = sourceData[j].product
				var tableRow = templateTableRow(selectedRegion[i], specificProduct)
				appendHTML(table, tableRow)
			}
		}
	}
}

// 所有绑定事件集合的函数
var bindEvents = function() {
	bindAll('.class-input', 'click', function() {
		// getData()
		// 获取点击到的地区, return 出来给变量
		var selectedRegion = getSelectedRegion()
		var selectedProduct = getSelectedProduct()
		log('selectedProduct is', selectedProduct, 'selectedRegion is',selectedRegion)
		insertTableHeader()
		insertTableRow(sourceData, selectedRegion)

	})
		log('click')
}


// 分开获取用户选择的数据, 最开始是地区和商品放在一个数组里, 之后分成两个函数获取地区和商品
var getData = function() {
	var regionForm = e('.region')
	var productForm = e('.product')
	var inputs = document.getElementsByTagName('input')
	// var regionChecked = []
	// var productChecked = []
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i]
		if (input.checked === true && input.parentElement === regionForm) {
			regionChecked.push(input)
		} else if (input.checked === true && input.parentElement === productForm){
			productChecked.push(input)
		}
	}
	log('regionChecked one is', regionChecked)
	log('productChecked one is', productChecked)
	log('regionChecked is ...', regionChecked[0].dataset.region, regionChecked[0].value,
	regionChecked.length)
	return regionChecked, productChecked
}

// 获取点击的地区 
var getSelectedRegion = function() {
	var regionForm = e('.region')
	var inputs = document.getElementsByTagName('input')
	var regionChecked = []
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i]
		if (input.checked === true && input.parentElement === regionForm) {
			regionChecked.push(input)
		} 
	}
	return regionChecked
}

// 获取点击的商品
var getSelectedProduct = function() {
	var productForm = e('.product')
	var inputs = document.getElementsByTagName('input')
	var productChecked = []
	for (var i = 0; i < inputs.length; i++) {
		var input = inputs[i]
		if (input.checked === true && input.parentElement === productForm) {
			productChecked.push(input)
		} 
	}
	return productChecked
}


var __main = function() {
	bindEvents()
}

__main()


