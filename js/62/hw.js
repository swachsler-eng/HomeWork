
let clicks = 1;

let button = document.querySelector('button');
button.textContent = `${clicks}`;

button.addEventListener('click', doStuff);

function doStuff() {
    clicks++;
    const newButton = document.createElement('button');
    newButton.textContent = `${clicks}`;
    document.body.appendChild(newButton);
    button.removeEventListener('click', doStuff);
    button=newButton;
   button.addEventListener('click',doStuff);
}

