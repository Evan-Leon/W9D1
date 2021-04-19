// Surrogate.prototype = SuperClass.prototype;
// Subclass.prototype = new Surrogate();
// Subclass.prototype.constructor = Subclass;

Function.prototype.inherits = function (ParentObject) {
  // this = childObject
  function Surrogate(){};
  Surrogate.prototype = ParentObject.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}


function MovingObject () {
  this.speed = 'Going somewhere..';
  // this.speed = function () {
  //   console.log('Going super fast');
  //   return 'Going super fast now'
  // }
}

function Ship () {
  this.pirate = "Pirates aboard"
}
mo = new MovingObject();
// console.log(mo.speed);
// console.log(mo.testing);

ship = new Ship();
console.log(ship.speed);
console.log(ship.pirate);
// console.log(mo.pirate);

function Asteroid () {}
Asteroid.inherits(MovingObject);