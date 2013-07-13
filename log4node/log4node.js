

var L = {};

var logPath = './log.txt', 
	fs = require('fs'), 
	toString = {}.toString;

L.log = function(o, path) {
	path = path || logPath; 
	var ret,
		type = toString.call(o).slice(8, -1); 

	if (type === 'Object') {
		ret = JSON.stringify(o); 
	} else {
		ret = o; 
	} 

	fs.openSync(path, "a+");
	L.logTime(path); 
	if (type === 'Array') {
		logArr(path, ret); 
	} else {
		fs.appendFileSync(path, ret + "\r\n"); 
	}
}

L.logTime = function(path) {
	var date = new Date(),
        time = date.getFullYear() + '/' + (date.getMonth() + 1) +
            '/' + date.getDate() + " " + date.getHours() +
            ":" + date.getMinutes() + ":" + date.getSeconds() +
            ":" + date.getMilliseconds(); 
    // fs.appendFile("D:/logRoc.txt", time + " " + log + "\r\n");
    fs.appendFileSync(path, time + "\r\n"); 
}

function logArr(path, arr, lineNum) {
	var line; 
	if (arguments.length < 3) {
		lineNum = true;
	}
	for (var i = 0; i < arr.length; ++i) {
		line = arr[i] + "\r\n"; 
		if  (lineNum) {
			line = (i + 1) + "	" + line; 
		}
		fs.appendFileSync(path, line); 
	}
}

module.exports = L;

