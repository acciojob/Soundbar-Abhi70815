//your JS code here. If required.
const buttons = document.getElementById('buttons');
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const audioElements = {};

sounds.forEach(sound => {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audioElements[sound] = audio;
});

buttons.addEventListener('click', event => {
    const { target } = event;
    if (target.classList.contains('btn')) {
        const sound = target.getAttribute('data-sound');
        if (sound) {
            stopSounds();
            audioElements[sound].play();
        } else if (target.classList.contains('stop')) {
            stopSounds();
        }
    }
});

function stopSounds() {
    Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
