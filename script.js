const playButton = document.getElementById('playButton');
playButton.addEventListener('click', () => {
    const audio = new Audio('path/to/your/audio/file.mp3');
    audio.play();
});