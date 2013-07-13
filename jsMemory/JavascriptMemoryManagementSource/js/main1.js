//var leak = new Leaker();

var leak;

$("#start_button").click(function(){
  leak = new Leaker();
  leak.init();
});

$("#destroy_button").click(function(){
	leak = null;
});

