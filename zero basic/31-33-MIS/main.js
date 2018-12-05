
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


// var getAllRegions = function() {
// 	var regionForm = e('.region')
// 	var regionInputs = regionForm.querySelectorAll('.class-region')
// 	var regionChecked = []
// 	for (var i = 0; i < regionInputs.length; i++) {
// 		regionChecked.push(regionInputs[i])
// 		var regionStatus = regionInputs[i].checked
// 		var inputRegionsAll = e('#region-all')
// 		if (regionStatus != true) {
// 		regionInputs[i].checked = 'checked'
// 		} else if (regionStatus === true) {
// 		// regionInputs[i].checked = 'checked'
// 		inputRegionsAll.checked = 'checked'
// 		}
// 	}
// 	return regionChecked
// }

// var getAllProducts = function() {
// 	var productForm = e('.product')
// 	var productInputs = productForm.querySelectorAll('.class-product')
// 	var productChecked = []
// 	for (var i = 0; i < productInputs.length; i++) {
// 		productChecked.push(productInputs[i])
// 		var productStatus = productInputs[i].checked
// 		var inputProductsAll = e('#product-all')
// 		if (productStatus != true) {
// 		productInputs[i].checked = 'checked'
// 		} else if (productStatus === true) {
// 		// productInputs[i].checked = 'checked'
// 		inputProductsAll.checked = 'checked'
// 		}
// 	}
// 	return productChecked
// }

// getAllItems 把上面两个函数用变量抽了出来
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

// 分开获取用户选择的数据, 最开始是地区和商品放在一个数组里, 之后分成两个函数获取地区和商品, 这个不用了
// var getData = function() {
// 	var regionForm = e('.region')
// 	var productForm = e('.product')
// 	var inputs = document.getElementsByTagName('input')
// 	// var regionChecked = []
// 	// var productChecked = []
// 	for (var i = 0; i < inputs.length; i++) {
// 		var input = inputs[i]
// 		if (input.checked === true && input.parentElement === regionForm) {
// 			regionChecked.push(input)
// 		} else if (input.checked === true && input.parentElement === productForm){
// 			productChecked.push(input)
// 		}
// 	}
// 	log('regionChecked one is', regionChecked)
// 	log('productChecked one is', productChecked)
// 	log('regionChecked is ...', regionChecked[0].dataset.region, regionChecked[0].value,
// 	regionChecked.length)
// 	return regionChecked, productChecked
// }

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


