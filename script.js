document.querySelectorAll('.bubble').forEach(bubble => {
    const randomHeight = (Math.random() * 100) + 70; // Random height percentage
    const randomDuration = Math.random() * 5 + 3; // Random duration between 3s and 8s
    bubble.style.setProperty('--float-height', `-${randomHeight}vh`);
    bubble.style.setProperty('--float-duration', `${randomDuration}s`);
});
