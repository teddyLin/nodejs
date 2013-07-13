//var leak = new Leaker();

var arr = [];

$("#start_button").click(function(){
  var leak; 
  leak = new Leaker();
  leak.init();
  
  arr.push(leak);
});

$("#destroy_button").click(function(){
	for (var i = 0; i < arr.length; ++i) {
		var leak = arr[i]; 
		arr[i] = null; 
		leak = null;
	}
});

