let loadingScreen = document.querySelector('.loading-screen'); // Загрузочный экран
let mainScreen = document.querySelector('.main'); // Экран блокировки
let mainChildren = mainScreen.children; // Дочерние элементы экрана блокировки


mainScreen.classList.add('hidden');

window.addEventListener('load', function() {
    if (this.document.readyState == 'complete') {

    setTimeout(() => {
        mainScreen.classList.add('appear');  
    }, 1100);

    setTimeout(() => {
        loadingScreen.classList.add('disappear');
        mainScreen.classList.add('appear');  
    }, 1500);
  
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
    }, 1500);
    }
});

