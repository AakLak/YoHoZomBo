function logToDocument(message) {
    const logDiv = document.getElementById('log');
    if (!logDiv) {
        const newLogDiv = document.createElement('div');
        newLogDiv.id = 'log';
        newLogDiv.style.position = 'fixed';
        newLogDiv.style.bottom = '0';
        newLogDiv.style.left = '0';
        newLogDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        newLogDiv.style.color = 'white';
        newLogDiv.style.padding = '10px';
        newLogDiv.style.zIndex = '1000';
        document.body.appendChild(newLogDiv);
    }
    document.getElementById('log').innerHTML += message + '<br>';
}

// Example usage
playButton.addEventListener('click', () => {
    const audio = new Audio('https://raw.githubusercontent.com/AakLak/YoHoZomBo/main/zomebocom.mp3');
    audio.play()
        .then(() => logToDocument("Audio is playing"))
        .catch(error => logToDocument("Error playing audio: " + error));
});
