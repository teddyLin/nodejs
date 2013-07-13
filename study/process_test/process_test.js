

// var process = require('process'); 

process.on('exit', function() {
	process.nextTick(function() {
		console.log('this will not run');

	})
	console.log('about to exit.');
})


