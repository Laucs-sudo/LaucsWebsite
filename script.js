
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Add a small delay for smoother transition if desired
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            loadingScreen.addEventListener('transitionend', () => {
                if (loadingScreen.classList.contains('hidden')) {
                }
            }, { once: true }); 
        }, 100);
    } else {
        console.error("Loading screen element not found.");
    }
});
