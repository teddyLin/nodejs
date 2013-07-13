

function xx(x, type) {
	console.log('x'); 
	console.log(type); 
}

function yy(x) {
	xx(x, 'ytype'); 
}

function zz(x) {
	xx(x, 'ztype'); 
}


yy(); 
zz();