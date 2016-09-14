var view = {
  init: function() {
    var $mainBox = $("<div></div>")
                    .addClass("box")
                    .css("width", "700px")
                    .css("height", 500 + "px");
    $('#main-box').append($mainBox);

    var thatView = this;
    $(document).on("keydown", function(e) {
      // 39 is right
      // 37 is left
      // 32 is space
      // 38 is up

      thatView.keyPress = e.which;
      console.log("This is from the listener: "+ thatView.keyPress);
    });

    $(document).on("keyup", function (e) {
      thatView.keyPress = undefined;
    });

  },

  displayInfo: function(character, str) {
    for( var key in character) 
    { 

      var $element = $("<li></li>");
      if (key === "hp") {
        var hpIndicator = key+ ": " ;
        for (var i = 0; i < parseInt(character[key]); i++) {
          hpIndicator += "l";
        }
        $element.text(hpIndicator);
      } else {
        $element.text(key + ": " + character[key]);
        
      }
      $(str).append($element);
    }
  },
  displayCharacter: function(character, title) {
    var $person = $('<div></div>')
      .addClass("character")
      .attr("id", title)
      .css("left", character.loc[0])
      .css("top" , character.loc[1])
      .css("width", "20px")
      .css("height", "50px");
    $(".box").append($person);
  },

  displayProjectiles: function(projectiles) {
    projectiles.forEach( function(el, index) {
      $proj = $('<div></div>')
        .addClass("projectile")
        .attr("id", index)
        .css("left", el.x)
        .css("top" , el.y)
        .css("width", "5px")
        .css("height", "5px");
      $(".box").append($proj);
    });
  },

  render: function(coords) {
    this.displayInfo(coords.player, "#player-info");
    this.displayInfo(coords.boss, "#boss-info");
    
    this.displayCharacter(coords.player, "player");
    this.displayCharacter(coords.boss, "boss"); 
    this.displayProjectiles(coords.proj);
  },

  clear: function(){
    $(".box").empty();
    $("#player-info").empty();
    $("#boss-info").empty();
  }
}