var ignored = ["abc", "uio", "wsx", "pla"];
var notIgnored = ["def", "qas", "mok"];
jQuery.each( notIgnored, function( i, val ) {
  $( "#" + val ).css({"color" : "red"});
});