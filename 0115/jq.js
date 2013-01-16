function $(selector){
	return new $.prototype.init(selector);
}
$.prototype={
	init:function(selector){
		if(selector){
			if(selector.nodeType==1){
				this[0] = selector;
			}else{
				this[0]=document.getElementById(selector);
			}			
			this.length=1;
		}
		else
			this.length=0;
	},
	attr:function(name,value){
		if(this[0].setAttribute)
			this[0].setAttribute(name,value);
		else
			this[0].name=value;
		return this;
	},
	hide:function(){
		var self=this;
		setTimeout(function(){
			self[0].style.display="none";
		},3000);
		return this;
	}
}
$.prototype.init.prototype=$.prototype;

