const apiKey = 'YOUR_API_KEY_GOES_HERE';
const buttons = document.querySelectorAll('.btn, .stop');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.dataset.sound;
        if (soundId === 'stop') {
            // Stop any currently playing audio
            document.querySelector('audio').pause();
        } else {
            // Fetch sound details from API
            const url = `https://freesound.org/apiv2/sounds/${soundId}/?token=${apiKey}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const audioUrl = data.previews['preview-lq-mp3'];
                    // Create and play the audio element
                    const audio = new Audio(audioUrl);
                    audio.play();
                })
                .catch(error => console.error(error));
        }
    });
});