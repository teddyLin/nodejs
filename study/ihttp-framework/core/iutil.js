//������ϼ̳�
inherit = function(child, parent) {
	for (var prop in parent.prototype) {
		if (typeof(child.prototype[prop]) === 'undefined') {
			child.prototype[prop] = parent.prototype[prop];
		}
	}
	child.prototype.constructor = child;
};

//�̳�ʽ����
icopy = function(obj) {
	function f(){}
	f.prototype = obj;
	return new f();
};