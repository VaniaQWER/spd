/**
 * mui.ajaxRequest
 * 封装mui.ajax请求，调用方式与一致
 */
(function($, doc) {
	var baseUrl = 'https://www.easy-mock.com/mock/5b8d3b510ab8991436ebd336/spd';
    mui.extend({
        ajaxRequest: function(url , options){
            var defaults = commonDefaules(options);
            var options = mui.extend(defaults, options);
            options.beforeSend = defaults.onBeforeSend;
            options.success = defaults.onSuccess;
            options.error = defaults.onError;
            mui.ajax(baseUrl+url , options);
        }
    })

    function commonDefaules(options){
        //默认参数定义
        var defaults = {
            dataType: "json",
            type: "post",
            timeout: 10000,
            wait: true,
            waitMessage: "努力奔跑中，等等我...",
            onBeforeSend : function(xhr){
                if(defaults.wait == true){
                    showLoading(defaults.waitMessage);
                }
                if(options.beforeSend){
                    options.beforeSend(xhr);
                }
            },
            onSuccess : function(data){

                if(defaults.wait == true){
                    hideLoading();
                }
                //也可用于后台验证失败时的提示信息
                if(data && data.result && (data.result === "input")){
                    plus.nativeUI.alert(data.message , function(){} , "提示：" , "取消");
                    return;
                }
                if(options.success){
                    options.success(data);
                }
            },
            onError : function(a , b , c){
                hideLoading();
                if(options.error){
                    options.error(a , b , c);
                }
            }
        };
        return defaults;
    }

    function showLoading(msg){
        plus.nativeUI.showWaiting(msg , {
            /*round: "1px", //圆角*/
            style: "white",
            back:"none",//不响应返回按钮事件
            background: "#66CDAA",
            /*background:"rgba(110,120,50,1)",*/
            loading:{
                display:"inline" ,
                icon:"/images/waiting.png"
            }
        });
    }

    function hideLoading(){
        plus.nativeUI.closeWaiting();
    }
}(mui, document));