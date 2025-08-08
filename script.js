
let currentInstrument = 'piano';

const soundMap = {
  piano: {
    G: 'sounds/g6G.mp3',
    F: 'sounds/f6F.mp3',
    B: 'sounds/b6B.mp3',
    C: 'sounds/c6C.mp3',
    D: 'sounds/d6D.mp3',
    E: 'sounds/e6E.mp3',
    A: 'sounds/a6A.mp3'
  },
  drum: {
    K: 'sounds/db1.mp3',
    S: 'sounds/sd3.mp3',
    H: 'sounds/sd5.mp3',
    T: 'sounds/snare-3.mp3'
  }
};

// Map physical keyboard keys to notes
const keyBindings = {
  // Piano
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  a: 'A',
  b: 'B',
  // Drums
  k: 'K',
  s: 'S',
  h: 'H',
  t: 'T'
};

function selectInstrument(name) {
  currentInstrument = name;
  document.querySelectorAll('.instrument').forEach(div => div.classList.add('hidden'));
  document.getElementById(name).classList.remove('hidden');
}

// Play sound function
function playSound(note) {
  const soundFile = soundMap[currentInstrument][note];
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play().catch(err => console.error('Audio play error:', err));
  } else {
    console.warn(`No sound mapped for key: ${note} in ${currentInstrument}`);
  }
}

// Click support
document.addEventListener('click', function (e) {
  const key = e.target.closest('[data-key]');
  if (key && currentInstrument) {
    const note = key.getAttribute('data-key');
    playSound(note);
  }
});

// Keyboard support
document.addEventListener('keydown', function (e) {
  const note = keyBindings[e.key.toLowerCase()];
  if (note) {
    playSound(note);
  }
});

// // Show piano by default
// selectInstrument('piano');

// Keyboard support with separate colors
document.addEventListener('keydown', function (e) {
  const note = keyBindings[e.key.toLowerCase()];
  if (note) {
    playSound(note);

    // Find the matching visual key (piano or drum)
    const keyElement = document.querySelector(`[data-key="${note}"]`);
    if (keyElement) {
      keyElement.classList.add('active');
    }
  }
});

document.addEventListener('keyup', function (e) {
  const note = keyBindings[e.key.toLowerCase()];
  if (note) {
    const keyElement = document.querySelector(`[data-key="${note}"]`);
    if (keyElement) {
      keyElement.classList.remove('active');
    }
  }
});


