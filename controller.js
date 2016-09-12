var controller = {
  init: function(){
    this.view = view;
    this.model = model;
    this.view.init();
    this.model.init();

    var coords = {
      player: this.model.hero.data,
      boss: this.model.boss.data,
      proj: this.model.projectiles
    };
    this.view.render(coords);

    var thatView = this.view;
    var thatController = this;
    // var play = setInterval( function(e) {
      
    //   }
    // }, 200);

    

  },
}