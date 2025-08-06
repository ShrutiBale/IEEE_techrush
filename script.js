let currentInstrument = 'piano';

const soundMap = {
  piano: {
    G:'g6G.mp3',
    F:'f6F.mp3',
    B:'b6B.mp3',
    C:'c6C.mp3',
    D:'d6D.mp3',
    E:'e6E.mp3',
    A:'a6A.mp3'
  },
  drum: {
    G:'db1.mp3',
    F:'sd3.mp3',
    B:'sd5.mp3',
    C:'snare-3.mp3' 
  }
};

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  if (soundMap[currentInstrument][key]) {
    playSound(key);
    animateKey(key);
  }
});

function playSound(key) {
  const audio = new Audio(soundMap[currentInstrument][key]);
  audio.play();
}

function animateKey(key) {
  const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
  if (keyDiv) {
    keyDiv.classList.add('active');
    setTimeout(() => keyDiv.classList.remove('active'), 150);
  }
}

document.getElementById('switchBtn').addEventListener('click', () => {
  currentInstrument = currentInstrument === 'piano' ? 'drum' : 'piano';
  document.getElementById('switchBtn').innerText = 
    currentInstrument === 'piano' ? 'Switch to drum' : 'Switch to Piano';
});

