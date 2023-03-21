// Game variables
var canvas, ctx, car, obstacles, score;

// Car object
var Car = function(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    // Draw the car
    this.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    // Move the car left or right
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

// Obstacle object
var Obstacle = function(x, y, width, height, color, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;

    // Draw the obstacle
    this.draw = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    // Move the obstacle down the screen
    this.move = function() {
        his.y += this.speed;
    }
};

// Initialize the game
function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  // Create the car
  car = new Car(canvas.width/2 - 25, canvas.height
  )
}