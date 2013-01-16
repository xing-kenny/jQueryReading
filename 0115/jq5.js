// var push = Array.prototype.push, slice = Array.prototype.slice;
var push = [].push, slice = [].slice;

function $(selector){
	return new $.prototype.init(selector);
};

$.fn = $.prototype = {
	init:function(selector){//简化的选择器，这里只需返回一个html element集合
		var els = document.getElementsByTagName(selector);
		for(var i=0;i<els.length;i++){
			this[i]=els[i];
		}		
        this.length=els.length;
	},
	toArray : function(){
		return slice.call( this, 0 );
	},
	slice : function(){
		var ret = $();//关键的一句,构造一个新的jq对象，
		var ary = slice.apply(this,arguments);//这里的this是jq对象，根据参数转成数组子集
		push.apply(ret,ary);//转成jq对象，即伪数组形式
		return ret;
	},
	eq : function(i){
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, +i + 1 );
	},
	first : function(){
		return this.eq(0);
	},
	last : function(){
		return this.eq(-1);
	},
	get : function(num){
		return num == null ? 
			this.toArray() : 
			( num < 0 ? this.slice(num)[ 0 ] : this[ num ] );		
	}
};
$.fn.init.prototype=$.fn;

