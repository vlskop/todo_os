let loadingScreen = document.querySelector('.loading-screen'); // Загрузочный экран
let mainScreen = document.querySelector('.main'); // Экран блокировки
let mainChildren = mainScreen.children; // Дочерние элементы экрана блокировки



for (let i = 0; i < mainChildren.length; i++) {
    mainChildren[i].classList.add('hidden'); // Всем дочерним элементам задал невидимость

    setTimeout(function(){
        loadingScreen.classList.add('disappear'); // Через 2,5 сек исчезает анимация загрузки
    }, 2500);

    setTimeout(function(){ // Через 4,5 сек:
        loadingScreen.classList.add('hidden'); // Невидимость загрузочного экрана 
        if (mainChildren[i].classList.contains('login-form')) { // Исключение из правила для окна логина
            mainChildren[i].classList.add('hidden');
        }
        else {
        mainChildren[i].classList.remove('hidden'); // Остальным убрал невидимость
        mainChildren[i].classList.add('appear'); // Плавное появление

        }
    }, 4500);
}
