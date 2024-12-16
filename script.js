const playButton = document.getElementById('playButton');

playButton.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default behavior
    const audio = new Audio('https://raw.githubusercontent.com/AakLak/YoHoZomBo/main/zomebocom.mp3');
    audio.play()
        .then(() => {
            console.log("Audio is playing");
        })
        .catch(error => {
            console.error("Error playing audio:", error);
        });
});
