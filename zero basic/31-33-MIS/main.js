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



// 表头模板
var templateTableHead = function() {
	var selectedRegion = getSelectedRegion()
	var selectedProduct = getSelectedProduct()
	var regionQty = selectedRegion.length
	var productQty = selectedProduct.length
	if (regionQty === 1 && productQty > 1) {
		var t = `
			<table class='table' border='1'>
				<tr>
					<th>地区</th>
					<th>商品</th>
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
	} else {
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
	}
	return t
}


var templateTableRow = function(region, product, sale) {
	var selectedRegion = getSelectedRegion()
	var selectedProduct = getSelectedProduct()
	var regionQty = selectedRegion.length
	var productQty = selectedProduct.length
	if (regionQty === 1 && productQty > 1) {
		var t = `
			<tr>
				<td rowspan="2">${region}</td>
				<td>${product}</td>
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
	} else {
		var t = `
			<tr>
				<td rowspan="3">${product}</td>
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
	}
	return t
}



var templateTableRow2nd = function(region, product, sale) {
	var selectedRegion = getSelectedRegion()
	var selectedProduct = getSelectedProduct()
	var regionQty = selectedRegion.length
	var productQty = selectedProduct.length
	if (regionQty === 1 && productQty > 1) {
		var t = `
			<tr>
				<td>${product}</td>
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
	} else {
		var t = `
			<tr>
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
	}
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
// var insertTableRow = function(sourceData, selectedRegion, selectedProduct) {
// 	var table = e('.table')
// 	for (var i = 0; i < selectedRegion.length; i++) {
// 		for (var j = 0; j < sourceData.length; j++) {
// 			var selectedRegionOne = selectedRegion[i].dataset.region
// 			if( selectedRegionOne === sourceData[j].region) {
// 				var specificProduct = sourceData[j].product
// 				var sales = sourceData[j].sale
// 				var tableRow = templateTableRow(selectedRegion[i], specificProduct, sales)
// 				appendHTML(table, tableRow)
// 			}
// 		}
// 	}
// }


// var setRowspan = function(regionQty, productQty) {

// }




// 一行一行插入表格, 用以下函数最后 append 一次就会有一个 tbody 出现,导致无法设置 rowspan 属性
var insertTableRow2 = function(sourceData, selectedRegion, selectedProduct) {
	var table = e('.table')
	var regionQty = selectedRegion.length
	var productQty = selectedProduct.length
	for (var i = 0; i < productQty; i++) {
		for (var j = 0; j < regionQty; j++) {
			for (var k = 0; k < sourceData.length; k++) {
				var selectedProductOne = selectedProduct[i].dataset.product
				var selectedRegionOne = selectedRegion[j].dataset.region
				// var selectedProductOne = selectedProduct[i].dataset.product
				if(selectedProductOne === sourceData[k].product && selectedRegionOne === sourceData[k].region ) {
					// var specificProduct = selectedProductOne
					var sales = sourceData[k].sale
					var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
					appendHTML(table, tableRow)
				}
			}
		}
	}
}

var insertTableRow2 = function(sourceData, selectedRegion, selectedProduct) {
	var temlateAll = ''
	var rowNum = 0
	var table = e('.table')
	var regionQty = selectedRegion.length
	var productQty = selectedProduct.length
	for (var i = 0; i < productQty; i++) {
		for (var j = 0; j < regionQty; j++) {
			for (var k = 0; k < sourceData.length; k++) {
				var selectedProductOne = selectedProduct[i].dataset.product
				var selectedRegionOne = selectedRegion[j].dataset.region
				// var selectedProductOne = selectedProduct[i].dataset.product
				if(selectedProductOne === sourceData[k].product && selectedRegionOne === sourceData[k].region ) {
					// var specificProduct = selectedProductOne
					var sales = sourceData[k].sale
					if (i === 0) {
						var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
						// rowNum++
					} else if (j === 0) {
						log('j === 0')
						var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
					} else {
						var tableRow = templateTableRow2nd(selectedRegionOne, selectedProductOne, sales)
					}
					var temlateAll = temlateAll + tableRow
					// appendHTML(table, tableRow)
				}
			}
		}
	}
	appendHTML(table, temlateAll)	
}


var getAllRegions = function() {
	var regionForm = e('.region')
	var regionInputs = regionForm.querySelectorAll('.class-region')
	var regionChecked = []
	for (var i = 0; i < regionInputs.length; i++) {
		regionChecked.push(regionInputs[i])
		var regionStatus = regionInputs[i].checked
		var inputRegionsAll = e('#region-all')
		if (regionStatus != true) {
		regionInputs[i].checked = 'checked'
		} else if (regionStatus === true) {
		// regionInputs[i].checked = 'checked'
		inputRegionsAll.checked = 'checked'
		}
	}
	return regionChecked
}

var getAllProducts = function() {
	var productForm = e('.product')
	var productInputs = productForm.querySelectorAll('.class-product')
	var productChecked = []
	for (var i = 0; i < productInputs.length; i++) {
		productChecked.push(productInputs[i])
		var productStatus = productInputs[i].checked
		var inputProductsAll = e('#product-all')
		if (productStatus != true) {
		productInputs[i].checked = 'checked'
		} else if (productStatus === true) {
		// productInputs[i].checked = 'checked'
		inputProductsAll.checked = 'checked'
		}
	}
	return productChecked
}

// getAllItems 把上面两个函数合并了
var getAllItems = function(formSelector, selector, selectorAll) {
	var form = e(formSelector)
	var inputs = form.querySelectorAll(selector)
	var all = []
	for (var i = 0; i < inputs.length; i++) {
		all.push(inputs[i])
		var status = inputs[i].checked
		var inputCheckBoxAll = e(selectorAll)
		if (status != true) {
		inputs[i].checked = 'checked'
		} else if (status === true) {
		// inputs[i].checked = 'checked'
		inputCheckBoxAll.checked = 'checked'
		}
	}
	return all
}



// 所有绑定事件集合的函数
var bindEvents = function() {
	// 给每个单选绑定点击事件
	bindAll('.class-region', 'click', function() {
		// getData()
		// 获取点击到的地区和商品, return 出来给变量
		var selectedRegion = getSelectedRegion()
		var selectedProduct = getSelectedProduct()
		var inputRegionsAll = e('#region-all')
		// 不允许一个都不勾选，所以当用户想取消唯一一个被勾选的子选项时，无交互反应
		// 虽然数组已经被清空, 但是再次把点击到的 event.target 加入数组
		if (selectedRegion.length === 0) {
			log('event.target is ', event.target)
			event.preventDefault()
			var target = event.target
			selectedRegion.push(target)
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

	bindAll('.class-product', 'click', function() {
		// 同理对于商品选项
		var selectedRegion = getSelectedRegion()
		var selectedProduct = getSelectedProduct()
		var inputProductsAll = e('#product-all')
		if (selectedProduct.length === 0) {
			log('event.target is ', event.target)
			event.preventDefault()
			var target = event.target
			selectedProduct.push(target)
		// 如果当前是全选状态，取消任何一个子选项，则全选CheckBox也要置为未勾选状态
		} else if (selectedProduct.length < 3) {
			inputProductsAll.checked = false
		// 点击最后一个未被选中的单个选项后，全选CheckBox也要置为被勾选状态
		} else if (selectedProduct.length === 3) {
			inputProductsAll.checked = true
		} 
		insertTableHeader()
		// *** 传入了三个参数 ***
		insertTableRow2(sourceData, selectedRegion, selectedProduct)
	})
	
	// 点击全选时, 选中所有 checkbox
	bindAll('.class-select-all','click', function(event) {
		// 点击 region 全选时，如果单个选项中只要有一个不是被选上的状态，则进行全选操作
		var regionForm = e('.region')
		var productForm = e('.product')
		// 全选地区
		if (event.target.parentElement === regionForm) {
			var selectedRegions = getAllItems('.region', '.class-region', '#region-all') 
			var selectedProduct = getSelectedProduct()
			log('select all region click')
			insertTableHeader()
			insertTableRow2(sourceData, selectedRegions, selectedProduct)
		// 全选商品
		} else if (event.target.parentElement === productForm) {
			var selectedRegion = getSelectedRegion()
			var selectedProducts = getAllItems('.product', '.class-product', '#product-all') 
			log('select all product click')
			insertTableHeader()
			insertTableRow2(sourceData, selectedRegion, selectedProducts)	
		}
	})


}


// 分开获取用户选择的数据, 最开始是地区和商品放在一个数组里, 之后分成两个函数获取地区和商品, 这个不用了
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


