/**
 * Test Controller��
 */

exports.class = function() {
	Controller.apply(this, arguments); //[Required]
};
exports.class.prototype = {
	index: function() {
		this.vendor('test', {var1: '[VAR1]', var2: '[VAR2]', var3: '[VAR3]'});
	}
};
//�̳���Controller����
inherit(exports.class, Controller); //[Required]