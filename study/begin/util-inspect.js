var obj = {
	name : "teddy", 
	age : 18
}

var util = require("util");

console.log(util);
console.log(obj);
console.log(util.inspect(obj, true, true));

console.log(util.inspect(util, true, true, true));