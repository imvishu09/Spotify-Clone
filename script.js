document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeElement = document.querySelector('.player-bar .curr-time');
    const totalTimeElement = document.querySelector('.player-bar .total-time');

    const totalDuration = 213;

    progressBar.addEventListener('input', function(event) {
        const progress = event.target.value;
        const currentTime = (progress / 100) * totalDuration;
        currentTimeElement.textContent = formatTime(currentTime);
    });

    progressBar.addEventListener('mousemove', function(event) {
        const progress = event.target.value;
        const currentTime = (progress / 100) * totalDuration;
        currentTimeElement.textContent = formatTime(currentTime);
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
    }
});
