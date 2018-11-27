Function.prototype.inherits = function (parent) {
  const Surrogate = function() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject (speed, size) {
  this.speed = speed;
  this.size = size;
}

MovingObject.prototype.move = function () {console.log('Object is moving!');};

function Ship (type, name) {
  this.type = type;
  this.name = name;
}
Ship.inherits(MovingObject);

function Asteroid (distance, composition) {
  this.distance = distance;
  this.composition = composition;
}
Asteroid.inherits(MovingObject);
Asteroid.prototype.collision = function () {console.log('Collision!!!!');};
