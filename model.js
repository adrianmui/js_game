function Projectile(x,y, pow)
{
  this.damage = pow;
  this.x = x;
  this.y = y;
}

function Character(x,y,hp,pow,def) {
  this.loc = [x,y] || [50, 500];
  this.health = hp || 20;
  this.pow = pow || 0;
  this.def = def || 0;

  this.data = { "loc" : this.loc,
                "hp" : this.health,
                "pow" : this.pow,
                "def" : this.def
  }
}

var model = {
  init: function() {
    // stack of projectiles
    this.projectiles = [];
    //hero = player, Erik is the Boss
    this.createHero();
    this.createTrautman();
  }, 

  createHero: function(){
    this.hero = new Character([50,500], 20, 2);
  },

  createTrautman: function() {
    this.boss = new Character([450,500], 100, 4);
  },



}