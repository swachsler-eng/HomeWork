// a little made-up tune played with the Web Audio API (no audio file needed)
const musicBtn = document.querySelector('#music-btn');
let audioCtx = null;
let musicTimer = null;

// note frequencies in Hz (0 = rest)
const C = 523, D = 587, E = 659, F = 698, G = 784, A = 880, HIGH_C = 1047;
const melody = [
    C, E, G, E, F, A, G, 0,
    E, G, HIGH_C, G, A, F, G, 0,
    C, E, G, E, F, D, E, 0,
    D, F, E, D, C, G, C, 0
];
const noteLength = 0.22; // seconds per note

function playNote(freq, time) {
    if (freq === 0) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + noteLength);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + noteLength);
}

function playLoop() {
    const start = audioCtx.currentTime + 0.05;
    melody.forEach((freq, i) => playNote(freq, start + i * noteLength));
    musicTimer = setTimeout(playLoop, melody.length * noteLength * 1000);
}

musicBtn.addEventListener('click', () => {
    if (!audioCtx) {
        audioCtx = new AudioContext();
    }
    if (musicTimer) {
        clearTimeout(musicTimer);
        musicTimer = null;
        audioCtx.suspend();
        musicBtn.textContent = '🎵 Music: Off';
    } else {
        audioCtx.resume();
        playLoop();
        musicBtn.textContent = '🎵 Music: On';
    }
});
