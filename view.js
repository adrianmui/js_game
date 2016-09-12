var view = {
  init: function() {
    var $mainBox = $("<div></div>")
                    .addClass("box")
                    .css("width", "70\%")
                    .css("height", 500 + "px");
    $('body').append($mainBox);
  },
  render: function(coords) {
    for( var key in coords.player) 
    { 
      var $element = $("<li></li>").text(key + ": " + coords.player[key]);
      $("#player-info").append($element);
    }

    for( var key in coords.boss) 
    { 
      var $element = $("<li></li>").text(key + ": " + coords.boss[key]);
      $("#boss-info").append($element);
    }

   

    

  },
}