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

    //play loop
    var play = setInterval( function(e) {

      // pass in data model

      coords = {
      player: this.model.hero.data,
      boss: this.model.boss.data,
      proj: this.model.projectiles
      }
      
      thatController.movePlayer();
      thatController.model.projectiles.forEach( function(el) {
        el.live();
      });



      thatController.view.clear();
      this.view.render(coords);      
    }, 200);

    

  },

    movePlayer: function(){
    var direction = this.view.keyPress;
    this.model.hero.move(direction);
  }
}