const theCanvas = document.querySelector("#can");
const ctx = theCanvas.getContext("2d");
const SNAKE_SIZE = 50;
let score = 0;
let snakeSpeed = 200;

function sizeCanvas() {
    theCanvas.width = window.innerWidth-(window.innerWidth%SNAKE_SIZE);
    theCanvas.height = window.innerHeight-(window.innerHeight%SNAKE_SIZE);
}
sizeCanvas();
window.addEventListener('resize', sizeCanvas);

const snakeHead = document.createElement('img');
snakeHead.src = "img/snakeHead.png";

const appleImg = document.createElement('img');
appleImg.src = "img/apple.png";

class Apple{
    x=Math.floor(Math.random() * (theCanvas.width/SNAKE_SIZE)) * SNAKE_SIZE;
    y = Math.floor(Math.random() * (theCanvas.height / SNAKE_SIZE)) * SNAKE_SIZE;
    draw(){
       ctx.drawImage(appleImg, this.x, this.y, SNAKE_SIZE, SNAKE_SIZE);
    }
}

let x = 0;
let y = 0;
let apple = new Apple();

let subX = SNAKE_SIZE;
let subY = 0;
function game(s) {
    setTimeout(() => {
        if ((x + subX) > theCanvas.width) {
            x = 0;
        };
        if ((y + subY) > theCanvas.height) {
            y = 0;
        }
        if ((x + subX) < 0) {
            x = theCanvas.width;
        }
        if ((y + subY) < 0) {
            y = theCanvas.height;
        }
        ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
        ctx.drawImage(snakeHead, x += subX, y += subY, SNAKE_SIZE, SNAKE_SIZE);
        ctx.font = "20px Cursive";
        ctx.fillStyle = "teal";
        ctx.fillText(`Score: ${score}`, 10, 30);
        if (x === apple.x && y === apple.y) {
            score += 10;
            apple = new Apple();
            snakeSpeed -= snakeSpeed * 0.10;
        }
        apple.draw();
    game(snakeSpeed);
    }, s);
};
snakeHead.onload = function () {
    game(200);
};
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "ArrowUp":
            subX = 0;
            subY = -SNAKE_SIZE;
            break;
        case "ArrowDown":
            subX = 0;
            subY = SNAKE_SIZE;
            break;
        case "ArrowLeft":
            subX = -SNAKE_SIZE;
            subY = 0;
            break;
        case "ArrowRight":
            subX = SNAKE_SIZE;
            subY = 0;
            break;
    }
});

;
