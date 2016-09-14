function Projectile(x,y, pow)
{
  this.damage = pow;
  this.x = x;
  this.y = y;

  this.live = function(){
    this.x += 1;
    this.y += 1;
  }
}

function Character(x,y,hp,pow,def) {
  this.bullets = [];
  this.direction = 39;
  this.loc = [x,y] || [50, 500];
  this.health = hp || 20;
  this.pow = pow || 0;
  this.def = def || 0;

  this.data = { "loc" : this.loc,
                "hp" : this.health,
                "pow" : this.pow,
                "def" : this.def
  };

  this.move = function(direction) {
      // 39 is right
      // 37 is left
      // 32 is space
      // 38 is up
      
    switch(direction) {
      //left
      case 37:
        this.loc[0] -= 1;
        this.direction = direction;
        break;
      // right
      case 39:
        this.loc[0] += 1;
        this.direction = direction;
        break;
      //space
      case 32:
        var prevDirection = this.direction;
        this.shoot(this.direction);
        this.direction = prevDirection;
        direction = prevDirection;
        break;

      default:
        break;
    };
  }

  this.shoot = function(where) {
    var bullet = new Projectile(0, 0, this.pow);
    switch(where) {
      case 37:
        bullet.x = this.loc[0] - 10;
        bullet.y = this.loc[1];
        break;
      case 39:
        bullet.x = this.loc[0] + 30;
        bullet.y = this.loc[1];
        break;
      default:
        break;
    };

    this.bullets.push(bullet);
    console.log(this.bullets);
  }
}

var model = {
  init: function() {
    
    //hero = player, Erik is the Boss
    this.createHero();
    this.createTrautman();
    // stack of projectiles
    this.projectiles = this.hero.bullets || [];
  }, 

  createHero: function(){
    this.hero = new Character(50,450, 20, 2);
  },

  createTrautman: function() {
    this.boss = new Character(650,450, 50, 4);
  },

  updateBullets: function() {
    this.projectiles = this.hero;
  }



}