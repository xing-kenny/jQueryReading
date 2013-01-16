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
	//$().each�����þ�̬��$.each
	each:function(callback){
		return $.each( this, callback );
	}
}
$.fn.init.prototype=$.fn;

//�򻯵�extend			
$.extend = function(obj){
	for(var a in obj)
		this[a] = obj[a];
};

//�򻯵�$.each�����Ե�������Ͷ���
$.extend({
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
	}
});

//����$.each
var obj={i:4,j:5,z:6},ary=[1,3,5,7];
$.each(obj,function(n,v){
	//alert(v);
})

//����$().each������ҳ������3������PԪ��
$("p").each(function(){
	//alert(this)
});
