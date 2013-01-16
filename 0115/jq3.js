function $(selector){
	return new $.prototype.init(selector);
}
$.fn=$.prototype={	 
	//简化的选择器，为测试$().each方法。这里只需返回一个element集合即可
	init:function(selector){
		var els = document.getElementsByTagName(selector);
		for(var i=0;i<els.length;i++){
			this[i]=els[i];
		}		
        this.length=els.length;
	},
	//$().each，调用静态的$.each
	each:function(callback){
		return $.each( this, callback );
	}
}
$.fn.init.prototype=$.fn;

//简化的extend			
$.extend = function(obj){
	for(var a in obj)
		this[a] = obj[a];
};

//简化的$.each，可以迭代数组和对象
$.extend({
	each : function(object,callback){
		var name, i = 0,
		length = object.length,
		isObj = length === undefined;
				
		if ( isObj ) {//对对象进行迭代
			for ( name in object ) {		
				if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
					break;
				}
			}		
		} else {//对数组进行迭代
			for ( var value = object[0];
				i < length && callback.call( value, i, value ) !== false; value = object[++i] ) {}
		}		
	}
});

//测试$.each
var obj={i:4,j:5,z:6},ary=[1,3,5,7];
$.each(obj,function(n,v){
	//alert(v);
})

//测试$().each；假设页面上有3个段落P元素
$("p").each(function(){
	//alert(this)
});
