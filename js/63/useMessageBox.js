
import showMessage from "./messageBox.js";

showMessage('it works!', ['yes', 'no', 'maybe']);

const msgInput = document.querySelector('#msg');

document.querySelector('#showMessage').addEventListener('submit', (e) => {
    e.preventDefault();

    showMessage(msgInput.value, ['OK']);
});

