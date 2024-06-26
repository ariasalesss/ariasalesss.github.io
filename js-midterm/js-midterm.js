// Create canvas setup
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


// generate random number between min and max 
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate random color, with alpha for transparency
function randomRGBA(alpha) {
    return `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)},${alpha})`;
}

// Define square class and use this. to set current paramenters for square
class Square {
    constructor(x, y, velX, velY, color, size) {
        this.x = x; // x coordinate of square
        this.y = y; // y coordinate of square
        this.velX = velX; //horizontal velocity
        this.velY = velY; // vertical velocity
        this.color = color; //color
        this.size = size; //size
    }



    draw() {
        ctx.fillStyle = this.color; // sets fill color of rectangle
        ctx.fillRect(this.x, this.y, this.size, this.size); // draws a rectangle ay coordinates x and y, with x and y size
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        } // make sure rectangel doesnt go offscreen horizontally right and to go other way if it does 

        if (this.x <= 0) {
            this.velX = -(this.velX);
        }// make sure rectangel doesnt go offscreen horizontally left and to go other way if it does 

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }//make sure rectangle doesnt go offscreen vertically up and if it does to go the other way

        if (this.y <= 0) {
            this.velY = -(this.velY);
        }//make sure rectangle doesnt go offscreen vertically down and if it does to go the other way

        this.x += this.velX; //update horizontal position
        this.y += this.velY; // update vertical position
    }
}

const squares = [];// array to hold squares





while (squares.length<2) {
    let size = random(200, 700); // Random size of the square 
    let x = random(0, width - size); // Random x coordinate
    let y = random(0, height - size); // Random y coordinate
    let velX = random(-9, 9); // Random horizontal velocity
    let velY = random(-9, 9); // Random vertical velocity
    let color = randomRGBA(0.5); // Random color with transparency

    squares.push(new Square(x, y, velX, velY, color, size));//create new square with same parameters
}



// Animation state starting variable
let isAnimating = true;

// Main animation loop
let animationId;
function loop() {
    ctx.clearRect(0, 0, width, height);

    for (const square of squares) {
        square.draw();
        square.update();
    
    }

    if (isAnimating) {
        animationId = requestAnimationFrame(loop);
    
    }
}

loop();

// Function to check collision between squares
function checkCollision(square1, square2) {
    return (
        square1.x < square2.x + square2.size &&
        square1.x + square1.size > square2.x &&
        square1.y < square2.y + square2.size &&
        square1.y + square1.size > square2.y
    );
}

// Event listener to stop animation loop on click and display percentage volume
canvas.addEventListener("click", function (event) {
    isAnimating = !isAnimating; //when click, stop animating


    
    if (isAnimating) {

        loop(); // Restart animation loop
        
        location.reload();
        
    } else {
        
        cancelAnimationFrame(animationId); // Pause animation loop
        
    }

  

    // Calculate and display intersection percentage
    const intersectionPercentage = calculateIntersectionPercentage();
    const percentage_span = document.querySelector("#percentage");
    percentage_span.innerHTML = `${intersectionPercentage}%`;
});

// Function to calculate intersection percentage
function calculateIntersectionPercentage() {

    const square1 = squares[0];
    const square2 = squares[1];

    const minX = Math.max(square1.x, square2.x); // the larger x coordinate/left intersection boundary
    const minY = Math.max(square1.y, square2.y);//the top boundary/larger y coordinate
    const maxX = Math.min(square1.x + square1.size, square2.x + square2.size); // size is side of square because all sides are same size
    const maxY = Math.min(square1.y + square1.size, square2.y + square2.size);

    const intersectionArea = Math.max(0, maxX - minX) * Math.max(0, maxY - minY);

    const totalArea = square1.size * square1.size + square2.size * square2.size - intersectionArea;

    return ((intersectionArea / totalArea) * 100).toFixed(2);
}




/// to change color randomly when clicked again add square.color = randomRGBA(0.3); somewhere
/// to change size randomly when clicked again add size = random somwhere in code