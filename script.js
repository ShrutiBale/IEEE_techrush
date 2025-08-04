let currentInstrument = 'piano';

const soundMap = {
  piano: {
    A:'g6G.mp3',
    S:'f6F.mp3',
    B:'b6B.mp3',
    C:'c6C.mp3'
  },
  drum: {
    A: 'd6D.mp3',
    S: 'a6A.mp3'
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
    currentInstrument === 'piano' ? 'Switch to Drum' : 'Switch to Piano';
});

