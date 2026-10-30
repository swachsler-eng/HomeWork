const tray = document.querySelector('#tray');
let offset;
let selectedPart = null;
const parts = [
    'body', 'ear-left', 'ear-right',
    'eyes-googly', 'eyes-round', 'eyes-lashes', 'eyes-blue',
    'glasses-red', 'glasses-groucho',
    'nose-orange', 'nose-clown',
    'mouth-grin', 'mouth-mustache', 'lips-red'
];

parts.forEach(part => {
    const img = document.createElement('img');
    img.src = `potatoPics/${part}.png`;
    img.alt = part;
    img.className = 'potato-part';
    tray.appendChild(img);
});

let topZ = 1;

window.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('potato-part')) {
        e.preventDefault();

        selectedPart = e.target;
        offset = { x: e.offsetX, y: e.offsetY };

        selectedPart.style.left = e.pageX - offset.x + 'px';
        selectedPart.style.top = e.pageY - offset.y + 'px';
        selectedPart.style.position = 'absolute';
        selectedPart.style.zIndex = topZ++;

        window.addEventListener('mousemove', handleMouseMove);
    }
});

window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', handleMouseMove);
    selectedPart = null;
});

function handleMouseMove(e) {
    selectedPart.style.left = e.pageX - offset.x + 'px';
    selectedPart.style.top = e.pageY - offset.y + 'px';
}
