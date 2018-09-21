function Utils() {
	
}

Utils.prototype.appendModule = function(selector) {
	var module = document.querySelector(selector).import.querySelector('script');
	document.querySelector('head').appendChild(module);
}

/**
 * @params [String] linkSelector 导入模板link id 
 * @params [String] tplId 模板id
 * @params [String] innerSelector 插入html dom
 * @params [Object] data 数据
 * @params [bool] insertType 数据插入（html Append, html replace ）
 * @params [function] callback 回调方法
 */
Utils.prototype.innerTplHtml = function(tplId, innerSelector ,data, insertType ,callback) {
	var html = template(tplId, data);
	if (html) {
		if(!insertType){
			document.querySelector(innerSelector).innerHTML = html;
		}else{
			html = document.querySelector(innerSelector).innerHTML + html;
			document.querySelector(innerSelector).innerHTML = html;
		}
	}
		
	if (typeof callback === 'function') 
		callback();
}