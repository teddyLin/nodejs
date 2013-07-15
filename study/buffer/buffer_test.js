

var buf1 = new Buffer(26), 
	buf2 = new Buffer(26); 


for (var i = 0; i < 26; i++) {
	buf1[i] = i + 97; 
	buf2[i] = 33; 
}

console.log(buf1.toString());
console.log(buf2.toString());



