
var fs = require('fs'), 
	fileList = [], 
	folderList = [], 
	util = require('util');

function readdir(path, cb) {
	var ret; 
	var dirList = fs.readdir(path, function(err, items) {
		ret = getFileFolder(path, items);	
		cb(ret); 
	})
}

function getFileFolder(path, names) {
	var fileList = [], 
		folderList = []; 

	for (var i = 0; i < names.length; ++i) {
		var itemPath = path + '/' + names[i]; 
		if (fs.statSync(itemPath).isFile()) {
			fileList.push(names[i]); 
		} else if (fs.statSync(itemPath).isDirectory()) {
			folderList.push(names[i]); 
		}
	}
	return {
		fileList : fileList, 
		folderList : folderList,
		path : path
	}
}

function walk(path) {
	var fileList = []; 

	var dirList = fs.readdirSync(path), 
		tmpPath; 
	dirList.forEach(function(item) {
		tmpPath = path + '/' + item; 
		if (fs.statSync(tmpPath).isFile()) {
			fileList.push(tmpPath); 
		} else if (fs.statSync(tmpPath).isDirectory()) {
			fileList = fileList.concat(walk(tmpPath));
		}
	})

	return fileList; 
}

readdir('D:/apache', function (dirs) {
	// console.log(dirs);
}); 


// var walkdir = walk("D:/Coding/workspaces/wsp1/www/ext-4.2.1/ext-src");
// console.log(walkdir); 
// log4node.log(walkdir);

var log4node = require('../../log4node/log4node'); 

// var o = {
// 	name : 'teddy',
// 	id : 'tt'
// }
// log4node.log(o);



// var AAdir = walk('D:/Coding/[AA-Project]/MMPA/MMPA/src/main/webapp'); 

// log4node.log(AAdir, './aafiles.txt'); 


// var o = fs.statSync('D:/Coding/nodejs/study/readDir/aafiles3.txt');
// console.log(o);




