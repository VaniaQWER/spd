function Utils() {
	
}

Utils.prototype.appendModule = function(selector) {
	var module = document.querySelector(selector).import.querySelector('script');
	document.querySelector('head').appendChild(module);
}