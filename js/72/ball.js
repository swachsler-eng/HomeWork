const can = document.querySelector("canvas");
const ctx = can.getContext("2d");
const btn = document.querySelector("#btn");
const sizeInput = document.querySelector("#size");
const colorSelect = document.querySelector("#color");

const colors = ['red', 'orange', 'gold', 'green', 'teal', 'blue', 'purple', 'pink', 'brown', 'black'];

colors.forEach(color => {
    const option = document.createElement("option");
    option.value = color;
    option.textContent = color;
    colorSelect.appendChild(option);
});

//const rad = 50;
// let x = rad+1;
// let y = rad + 1;
// let dx = 1;
// let dy = 1;
const balls = [];

function sizeCanvas() {
    can.width = window.innerWidth;
    can.height = window.innerHeight;
}
sizeCanvas();
window.addEventListener('resize', sizeCanvas);

class Ball {

    constructor(radius, color) {

        this.rad = radius;
        this.x = radius + 1 + (Math.random() * (window.innerWidth - 2 * (radius + 1)));
        this.y = radius + 1 + (Math.random() * (window.innerHeight - 2 * (radius + 1)));;
        this.dx = 1;
        this.dy = 1;
        this.color = color;
    };

    Draw() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
        ctx.stroke();
    }
}
// const ball = new Ball(50, 'red');
// ball.Draw();


btn.addEventListener("click", () => {
    balls.push(new Ball(Number(sizeInput.value), colorSelect.value));
});

setInterval(() => {

    ctx.clearRect(0, 0, can.width, can.height);

    balls.forEach(ball => {
        if ((ball.x > window.innerWidth - (ball.rad + 1)) || ball.x < (ball.rad + 1)) {
            ball.dx = -ball.dx;
        }
        if (ball.y < (ball.rad + 1) || ball.y >= window.innerHeight - (ball.rad + 1)) {
            ball.dy = -ball.dy;
        }
        ball.x += ball.dx;
        ball.y += ball.dy;

        ctx.beginPath();
        ctx.strokeStyle = `${ball.color}`;
        ctx.arc(ball.x, ball.y, ball.rad, 0, Math.PI * 2);
        ctx.stroke();


    });
}, 10);

// let x = rad+1;
// let y = rad + 1;
// let dx = 1;
// let dy = 1;

// setInterval(() => {

//     ctx.clearRect(0, 0, can.width, can.height);

//     balls.forEach(ball => {
//         if ((ball.x > window.innerWidth - (rad + 1)) || ball.x < (rad + 1)) {
//             ball.dx = -ball.dx;
//         }
//         if (ball.y < (rad + 1) || ball.y >= window.innerHeight - (rad + 1)) {
//             ball.dy = -ball.dy;
//         }
//         ball.x += ball.dx;
//         ball.y += ball.dy;

//         ctx.beginPath();
//         ctx.strokeStyle = 'green';
//         ctx.arc(ball.x, ball.y, 50, 0, Math.PI * 2);
//         ctx.stroke();


//     }, 10);
// }) ;










