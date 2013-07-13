var ndir = require('ndir');

ndir.walk('./', function onDir(dirpath, files) {
	console.log(' * %s', dirpath);
	for (var i = 0, l = files.length; i < l; i++) {
		var info = files[i];
		if (info[1].isFile()) {
			console.log('   * %s', info[0]);
		}
	}
}, function end() {
	console.log('walk end.');
}, function error(err, errPath) {
	console.error('%s error: %s', errPath, err);
});


var lineNumber = 0;
ndir.createLineReader('./test/access.log').on('line', function(line) {
  console.log('%d: %s', ++lineNumber, line.toString());
}).on('end', function() {
  console.log('read a file done.')
}).on('error', function(err) {
  console.log('error: ', err.message)
});