console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;


const pullCanvas = function() {
  let canvas = document.getElementById("game-canvas");
  return canvas.getContext("2d");
};


document.addEventListener("DOMContentLoaded", pullCanvas);
