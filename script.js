const playButton = document.getElementById('playButton');

playButton.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default behavior
    playAudio();
});

playButton.addEventListener('click', (event) => {
    playAudio();
});

function playAudio() {
    const audio = new Audio('https://raw.githubusercontent.com/AakLak/YoHoZomBo/main/zomebocom.mp3'); // Use the raw URL
    audio.play()
        .then(() => {
            console.log("Audio is playing");
        })
        .catch(error => {
            console.error("Error playing audio:", error);
        });
}
