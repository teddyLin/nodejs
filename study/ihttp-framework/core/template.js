/**
 * ģ�崦���� Template
 */

exports.class = function(){
	
};
exports.class.prototype = {
	parse: function(file, assign) {
		var fs = require('fs');
		var result = '';
		try {
			var content = fs.readFileSync(file, 'utf8');
			//�滻����
			if(content) {
				result = content.replace(/\{\$(\w+)?\}/g, function() {
					return assign[arguments[1]]; //ȡ��һ��ƥ���� ��Ϊ ������
				});
			}
		} catch (e) {
			console.log(e); //DEBUG
		} finally {
			return result;
		}
	}
};