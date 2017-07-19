var arr = ["def", "qas", "wsx"];
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).css({"color" : "blue"});
});