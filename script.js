let currentAudio = null; // Global variable to store currently playing audio

const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Stop the current audio if it's playing
    if (currentAudio) {
      currentAudio.pause();
    }
    
    const soundName = button.getAttribute('data-sound');
    currentAudio = new Audio(`sounds/${soundName}.mp3`); // Update the current audio
    currentAudio.play();
  });
});

stopButton.addEventListener('click', () => {
  // Stop the current audio if it's playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null; // Reset the current audio
  }
});