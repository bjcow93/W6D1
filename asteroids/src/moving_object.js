function MovingObject(varHash) {
  this.pos = varHash.pos;
  this.vel = varHash.vel;
  this.radius = varHash.radius;
  this.color = varHash.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
   this.pos[0],
   this.pos[1],
   this.radius,
   0,
   2 * Math.PI,
   false
 );

 ctx.fill();
};

module.exports = MovingObject;
