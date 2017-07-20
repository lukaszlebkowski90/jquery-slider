var carousel = $("#carousel ul");
var liLast = carousel.find("li:last");
var liFirst = carousel.find("li:first");
function slider_right () {
	carousel.animate({marginLeft:-480},500,function(){
		var liLast = carousel.find("li:last");
		var liFirst = carousel.find("li:first");			
		liLast.after(liFirst);
		carousel.css({marginLeft:0});
	})
};
// setInterval(slider_right, 1000);
function slider_left () {
	carousel.animate({marginLeft: 0}, 500, function(){
		var liLast = carousel.find("li:last");
		var liFirst = carousel.find("li:first");
		liFirst.before(liLast);
		carousel.css({marginLeft:-480});
	});
};
// setInterval(slider_left, 1000);
$("#arrow-next").on("click", function() {
	slider_right ();
});
$("#arrow-prev").on("click", function() {
	slider_left();
});



