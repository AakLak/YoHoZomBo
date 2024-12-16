playButton.addEventListener('touchstart', (event) => {
    alert("Button pressed!"); // Check if this alert shows up
    event.preventDefault();
    const audio = new Audio('https://raw.githubusercontent.com/AakLak/YoHoZomBo/main/zomebocom.mp3');
    audio.play()
        .then(() => {
            console.log("Audio is playing");
        })
        .catch(error => {
            console.error("Error playing audio:", error);
        });
});
