

var F = require('./cfs'), 
	L = require('../../log4node/log4node'), 
	A = require('./AAA'), 
	ndir = require('ndir'), 
	fs = require('fs'); 


// var files = F.walk('D:/Coding/[AA-Project]/MMPA/MMPA/src/main/webapp');
// L.log(files, './aafiles2.txt'); 



// var allJsFiles = A.getAllJsfiles('D:/Coding/[AA-Project]/MMPA/MMPA/src/main/webapp'); 
// L.log(allJsFiles, './aafiles3.txt');

// console.log('hello'); 


var allJsFiles = A.getAllJsfiles('D:/Coding/[AA-Project]/MMPA/MMPA/src/main/webapp'); 

var file, 
	writeFile = 'aa-all-debug.js'; 

fs.openSync(writeFile, "a+");
for (var i = 0; i < allJsFiles.length; ++i) {
	file = allJsFiles[i]; 
	fs.appendFileSync(writeFile, '//' + file + '\r\n'); 
	ndir.createLineReader(file).on('line', function(line) {
		fs.appendFileSync(writeFile, line); 
	}).on('end', function(){
		fs.appendFileSync(writeFile, '//' + file + '\r\n'); 
	}).on('error', function(err) {
		console.log(err);
	})
}

// var tpath = 'D:/Coding/[AA-Project]/MMPA/MMPA/src/main/webapp/common/aacomponents/calendar/calendar.js'; 

// ndir.createLineReader(tpath).on('line', function(line) {
// 	fs.appendFileSync(writeFile, line);
// }).on('end', function() {
// 	fs.appendFileSync(writeFile, '//' + file + '\r\n');
// }).on('error', function(err) {
// 	console.log(err);
// })