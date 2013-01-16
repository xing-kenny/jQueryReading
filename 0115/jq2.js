function $(selector){
	return new $.prototype.init(selector);
}
$.fn=$.prototype={
	init:function(selector){
		if(selector.nodeType==1){
			this[0] = selector;
		}else{
			this[0]=document.getElementById(selector);
		}
        this.length=1;
	}
}
$.fn.init.prototype=$.fn;

$.extend = $.fn.extend = function(obj){
	for(var a in obj)
		this[a] = obj[a];
};

$.fn.extend({
	hide:function(){	
		this[0].style.display="none";					
		return this;
	}
})


$.extend({
	getRealStyle:function(){
		return "getRealStyle";
}});

