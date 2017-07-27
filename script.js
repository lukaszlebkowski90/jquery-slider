var p = $("p");
  p.each(function(index, element)  {
    var id = p.attr("id");
    var ignored = ["qas", "mok", "pla"];
    var cssObject = {color:"red"};
    var indexOfElement = ignored.indexOf(id);
      if (indexOfElement === -1) {
        for (var x = 0; x < ignored.length; x++) {
          p.filter('#' + ignored[x]).css(cssObject);
        }  
      }
  });


