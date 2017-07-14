$(document).ready(function(){
	setInterval(function(){
		$("#carousel ul").animate({marginLeft:-480},500,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},1000);
});


