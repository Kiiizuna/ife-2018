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