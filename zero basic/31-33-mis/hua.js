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
