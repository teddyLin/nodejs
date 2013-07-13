/**
 * AAA === Asset Allocation Analysis
 */

var A = {}, 
	fs = require('fs'), 
	L = require('../../log4node/log4node'),
	F = require('./cfs'); 


A.getAllJsfiles = function(path) {
	var jsre = /\.js$/; 
	function isJs(path) {
		if (jsre.test(path)) {
			return true; 
		} else {
			return false;
		}
	}
	return F.walk(path, isJs); 
}

module.exports = A; 