

var F = {}, 
	fs = require('fs'); 


F.walk = function(path, callback) {
	var fileList = []; 

	var dirList = fs.readdirSync(path), 
		tmpPath; 
	dirList.forEach(function(item) {
		tmpPath = path + '/' + item; 
		if (fs.statSync(tmpPath).isFile()) {
			if (!callback || callback(tmpPath)) {
				fileList.push(tmpPath); 
			}
		} else if (fs.statSync(tmpPath).isDirectory()) {
			fileList = fileList.concat(F.walk(tmpPath, callback));
		}
	})

	return fileList; 
}

module.exports = F; 