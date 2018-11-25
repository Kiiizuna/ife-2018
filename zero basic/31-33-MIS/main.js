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

var templateTableRow = function(region, product, sale) {
	// var region = input.dataset.region
	var t = `
		<tr>
			<td>${product}</td>
			<td>${region}</td>
			<td>${sale[0]}</td>
			<td>${sale[1]}</td>
			<td>${sale[2]}</td>
			<td>${sale[3]}</td>
			<td>${sale[4]}</td>
			<td>${sale[5]}</td>
			<td>${sale[6]}</td>
			<td>${sale[7]}</td>
			<td>${sale[8]}</td>
			<td>${sale[9]}</td>
			<td>${sale[10]}</td>
			<td>${sale[11]}</td>	
		</tr>
	`
	return t
}

// 插入表头
var insertTableHeader = function() {
	var tableDiv = e('#table-wrapper')
	tableDiv.innerHTML = ''
	var tableHeader = templateTableHead()
	appendHTML(tableDiv, tableHeader)
}

// 根据地址信息从 sourceData 中获取所有的产品的销量 OK
var insertTableRow = function(sourceData, selectedRegion, selectedProduct) {
	var table = e('.table')
	for (var i = 0; i < selectedRegion.length; i++) {
		for (var j = 0; j < sourceData.length; j++) {
			var selectedRegionOne = selectedRegion[i].dataset.region
			if( selectedRegionOne === sourceData[j].region) {
				var specificProduct = sourceData[j].product
				var sales = sourceData[j].sale
				var tableRow = templateTableRow(selectedRegion[i], specificProduct, sales)
				appendHTML(table, tableRow)
			}
		}
	}
}

var insertTableRow2 = function(sourceData, selectedRegion, selectedProduct) {
	var table = e('.table')
	for (var i = 0; i < selectedRegion.length; i++) {
		for (var j = 0; j < selectedProduct.length; j++) {
			for (var k = 0; k < sourceData.length; k++) {
				var selectedRegionOne = selectedRegion[i].dataset.region
				var selectedProductOne = selectedProduct[j].dataset.product
				if( selectedRegionOne === sourceData[k].region && selectedProductOne === sourceData[k].product) {
					// var specificProduct = selectedProductOne
					var sales = sourceData[k].sale
					var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
					appendHTML(table, tableRow)
				}
			}
		}
	}
}

var getAllRegions = function() {
	var regionForm = e('.region')
	var regionInputs = regionForm.querySelectorAll('.class-input')
	for (var i = 0; i < regionInputs.length; i++) {
		var regionStatus = regionInputs[i].checked
		var inputRegionsAll = e('#region-all')
		if (regionStatus != true) {
		regionInputs[i].checked = 'checked'
		} else if (regionStatus === true) {
		regionInputs[i].checked = 'checked'
		inputRegionsAll.checked = 'checked'
		}
	}
}

var getAllProducts = function() {
	var productForm = e('.product')
	var productInputs = productForm.querySelectorAll('.class-input')
	for (var i = 0; i < productInputs.length; i++) {
		productInputs[i].checked = 'checked'
	}
}


// 所有绑定事件集合的函数
var bindEvents = function() {
	// 给每个单选绑定点击事件
	bindAll('.class-input', 'click', function() {
		// getData()
		// 获取点击到的地区和商品, return 出来给变量
		var selectedRegion = getSelectedRegion()
		var selectedProduct = getSelectedProduct()
		var inputRegionsAll = e('#region-all')
		if (selectedRegion.length === 0) {
			log('event.target is ', event.target)
			event.preventDefault()
		// 如果当前是全选状态，取消任何一个子选项，则全选CheckBox也要置为未勾选状态
		} else if (selectedRegion.length < 3) {
			inputRegionsAll.checked = false
		// 点击最后一个未被选中的单个选项后，全选CheckBox也要置为被勾选状态
		} else if (selectedRegion.length === 3) {
			inputRegionsAll.checked = true
		} 
		log('selectedProduct is', selectedProduct, 'selectedRegion is',selectedRegion)
		insertTableHeader()
		// *** 传入了三个参数 ***
		insertTableRow2(sourceData, selectedRegion, selectedProduct)
	})
	
	bindAll('.class-select-all','click', function(event) {
		// 点击 region 全选时，如果单个选项中只要有一个不是被选上的状态，则进行全选操作
		var regionForm = e('.region')
		if (event.target.parentElement === regionForm) {
			getAllRegions()
		log('select all region click')
		} 
	})
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
		if (input.checked === true && input.parentElement === regionForm && input.dataset.region != 'all') {
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
		if (input.checked === true && input.parentElement === productForm && input.dataset.product != 'all') {
			productChecked.push(input)
		} 
	}
	return productChecked
}


var __main = function() {
	bindEvents()
}

__main()


