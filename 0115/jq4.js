function $(selector){
	return new $.prototype.init(selector);
}
$.fn=$.prototype={	 
	//�򻯵�ѡ������Ϊ����$().each����������ֻ�践��һ��element���ϼ���
	init:function(selector){
		var els = document.getElementsByTagName(selector);
		for(var i=0;i<els.length;i++){
			this[i]=els[i];
		}		
        this.length=els.length;
	},
	//$().each,���þ�̬��$.each
	each:function(callback){
		return $.each( this, callback );
	},
	//$("p").map,���þ�̬��$.map
	map: function( callback ) {
		return $.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		});
	}
}
$.fn.init.prototype=$.fn;

//�򻯵�extend			
$.extend = function(obj){
	for(var a in obj)
		this[a] = obj[a];
};

//��$�����һЩ��̬����
$.extend({
	//�򻯵�$.each�����Ե�������Ͷ���
	each : function(object,callback){
		var name, i = 0,
		length = object.length,
		isObj = length === undefined;
				
		if ( isObj ) {//�Զ�����е���
			for ( name in object ) {		
				if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
					break;
				}
			}		
		} else {//��������е���
			for ( var value = object[0];
				i < length && callback.call( value, i, value ) !== false; value = object[++i] ) {}
		}		
	},
	//�ϲ��������飬��ı�first
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
	//����ÿ��Ԫ��������һ���������������޸ĵ�����
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
	//��������
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

