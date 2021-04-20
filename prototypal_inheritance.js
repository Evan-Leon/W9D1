// Surrogate.prototype = SuperClass.prototype;
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor = Subclass;

Function.prototype.inherits = function (ParentObject) {
  // this = childObject
  function Surrogate(){};
  Surrogate.prototype = ParentObject.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  // return this;
}


function MovingObject () {
  this.speed = 'Going somewhere..';
  // this.speed = function () {
  //   console.log('Going super fast');
  //   return 'Going super fast now'
  // }
}

function Ship () {
  this.pirate = "Pirates aboard";
}

function Asteroid () {
  this.space = "floating through space........"
}


const mo = new MovingObject();
// console.log(mo.speed);
// console.log(mo.testing);

Asteroid.inherits(MovingObject);
Ship.inherits(MovingObject);

const ast = new Asteroid();
const ship = new Ship();
// console.log(ast.speed);
// mo.speed;
// console.log(ship.speed); 
// console.log(ship.pirate);
// console.log(ast.pirate);
// console.log(ship.space);

// console.log(mo.pirate);


Asteroid.inherits(MovingObject);