var canvas, ctx, car, obstacles, score;


var Car = function(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;


    this.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }


    this.move = function(direction) {
            if (direction === 'left') {
                if (this.x > 0) {
                    this.x -= 5;
                }
            } 
            else if (direction === 'right') {
            if (this.x < canvas.width - this.width) {
                this.x += 5;
            }
        }
    }
};


var Obstacle = function(x, y, width, height, color, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;


    this.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }


    this.move = function() {
        his.y += this.speed;
    }
};


function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  // Create the car
  car = new Car(canvas.width/2 - 25, canvas.height
  )
}