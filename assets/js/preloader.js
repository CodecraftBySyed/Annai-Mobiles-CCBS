window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});
