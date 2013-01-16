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
	//$().each,调用静态的$.each
	each:function(callback){
		return $.each( this, callback );
	},
	//$("p").map,调用静态的$.map
	map: function( callback ) {
		return $.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		});
	}
}
$.fn.init.prototype=$.fn;

//简化的extend			
$.extend = function(obj){
	for(var a in obj)
		this[a] = obj[a];
};

//给$上添加一些静态方法
$.extend({
	//简化的$.each，可以迭代数组和对象
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
	},
	//合并两个数组，会改变first
	merge: function( first, second ) {
		var i = first.length, j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}
		first.length = i;
		return first;
	},
	//数组每个元素上运行一个函数，返回新修改的数组
	map: function( elems, callback ) {
		var ret = [], value;

		for ( var i = 0, length = elems.length; i < length; i++ ) {
			value = callback( elems[ i ], i );
			if ( value != null ) {
				ret[ ret.length ] = value;
			}
		}
		return ret.concat.apply( [], ret );
	},
	//过滤数组
	grep: function( elems, callback, inv ) {
		var ret = [];
		
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			if ( !inv !== !callback( elems[ i ], i ) ) {
				ret.push( elems[ i ] );
			}
		}
		return ret;
	}
});

