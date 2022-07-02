let loadingScreen = document.querySelector('.loading-screen');
let mainScreen = document.querySelector('.main');

setTimeout(function() {
    loadingScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    mainScreen.classList.add('appear');
}, 5000);
