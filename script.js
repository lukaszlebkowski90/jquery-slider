$("p").css({"color" : "red"});
var ignored = ["abc", "uio", "wsx", "pla"];
jQuery.each( ignored, function( i, val ) {
  $( "#" + val ).css({"color" : "black"});
});