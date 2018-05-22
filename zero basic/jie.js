var log = function() {
    console.log.apply(console, arguments)
}


var e = function(element,selector) {
    return element.querySelector(selector)
}


var appendHTML = function(element, html) {
    return element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, eventName, callback) {
	element.addEventListener(eventName, callback)
}


var bindAll = function(selector, eventName, callback) {
	var elements = document.querySelectorAll(selector)
	for (var i = 0; i < elements.length; i++) {
		var e = elements[i]
		bindEvent(e, eventName, callback)
	}
}

//find可以查找 element 的所有子元素
var find = function(element, selector) {
	return element.querySelector(selector)
}

var toggleClass = function(element, className) {
	if (element.classList.contains(className)) {
		element.classList.remove(className)
	} else {
		element.classList.add(className)
	}
}