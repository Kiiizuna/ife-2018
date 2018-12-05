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
	log('productQty', productQty)
	log('regionQty', regionQty)
	if (regionQty === 1 && productQty > 1) {
		var t = `
			<tr>
				<td rowspan=${productQty}>${region}</td>
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
				<td rowspan=${regionQty}>${product}</td>
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





// var createTableRow = function(selectedRegion, selectedProduct, sales, selectedRegionOne, selectedProductOne) {
// 	var tableRow = ''
// 	var regionQty = selectedRegion.length
// 	var productQty = selectedProduct.length	
// 	if (regionQty === 1 && productQty > 1) {
// 		if (i === 0) {
// 			var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
// 		} else {
// 			var tableRow = templateTableRow2nd(selectedRegionOne, selectedProductOne, sales)
// 		}
// 	} else if (regionQty > 1 && productQty > 1) {
// 		if (j === 0) {
// 			var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
// 		} else {
// 			var tableRow = templateTableRow2nd(selectedRegionOne, selectedProductOne, sales)
// 		}
// 	} else if (productQty === 1 && regionQty > 1) {
// 		if (j === 0) {
// 			var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
// 		} else {
// 			var tableRow = templateTableRow2nd(selectedRegionOne, selectedProductOne, sales)
// 		}
// 	} else if (productQty === 1 && regionQty === 1) {
// 			var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
// 	}
// 	return tableRow
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
					if (regionQty === 1 && productQty > 1) {
						if (i === 0) {
							var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
						} else {
							var tableRow = templateTableRow2nd(selectedRegionOne, selectedProductOne, sales)
						}
					} else if (regionQty > 1 && productQty > 1) {
						if (j === 0) {
							var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
						} else {
							var tableRow = templateTableRow2nd(selectedRegionOne, selectedProductOne, sales)
						}
					} else if (productQty === 1 && regionQty > 1) {
						if (j === 0) {
							var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
						} else {
							var tableRow = templateTableRow2nd(selectedRegionOne, selectedProductOne, sales)
						}
					} else if (productQty === 1 && regionQty === 1) {
							var tableRow = templateTableRow(selectedRegionOne, selectedProductOne, sales)
					}
					
					var temlateAll = temlateAll + tableRow
					// appendHTML(table, tableRow) 
					// 原来是放在这里的
				}
			}
		}
	}
	appendHTML(table, temlateAll)	
}