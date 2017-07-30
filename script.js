$("p").each(function(index, value)  {
    var id = $(this).attr("id");
    var ignored = ["abc", "mok", "pla", "wsx"];
    var cssObject = {color:"red"};
    var indexOfElement = ignored.indexOf(id);
      if (indexOfElement === -1) {
        $(value).css(cssObject);
      }  
  });
