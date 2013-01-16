// var push = Array.prototype.push, slice = Array.prototype.slice;
var push = [].push, slice = [].slice;

function $(selector){
	return new $.prototype.init(selector);
};

$.fn = $.prototype = {
	init:function(selector){//�򻯵�ѡ����������ֻ�践��һ��html element����
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
		var ret = $();//�ؼ���һ��,����һ���µ�jq����
		var ary = slice.apply(this,arguments);//�����this��jq���󣬸��ݲ���ת�������Ӽ�
		push.apply(ret,ary);//ת��jq���󣬼�α������ʽ
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

