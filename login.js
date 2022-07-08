let enterButton = document.querySelector('#login-btn'); // Кнопка "Войти"
let loginForm = document.querySelector('.login-form'); // Окошко входа
let loginButton = document.querySelector('#login-submit'); // Кнопка "Продолжить"
let userName = document.querySelector('#login-name'); //Область ввода имени
let greetingsName = document.querySelector('.name'); // Имя пользователя после "Привет," под часами
let loginInput = loginForm.querySelector('#login-name'); // окно input

// Работа кнопки войти
enterButton.addEventListener('click', () => {
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        loginForm.classList.add('appear');
    } else {
        loginForm.classList.add('hidden');   
    }
});

// Работа кнопки Продолжить
loginButton.addEventListener('click', () => {
    if (userName.value.length == 0) {
        console.log('Ошибка, нет имени пользователя');
    }
    else {
    greetingsName.textContent = userName.value + ',';
    localStorage.setItem('name', userName.value);
    loginForm.classList.add('hidden');
    enterButton.textContent = userName.value;
    userName.value = '';
    }
});
// Вход по нажатию ENTER
loginInput.addEventListener('keydown', (evt) => {
    if (evt.keyCode == 13) {
        evt.preventDefault();
        greetingsName.textContent = userName.value + ',';
        enterButton.textContent = userName.value;
        localStorage.setItem('name', userName.value);
        loginForm.classList.add('hidden');
        userName.value = '';
    }
});

function hideAddressBar() {
    if (navigator.userAgent.match(/Android/i) != null) {
        //window.orientation 0 - 180 - landscape; 90 and -90 portrait
        document.documentElement.style.height = window.outerHeight + 'px';
        setTimeout(window.scrollTo(0, 1), 0);
    }
}

// Показ имени в кнопке входа и приветствии при загрузке 
// (для local storage)
window.addEventListener('load', () => {
    hideAddressBar()
    if (localStorage.getItem('name') === "" || localStorage.getItem('name') === null) {
        greetingsName.textContent = '';
        enterButton.textContent = 'Войти';
    }
     else {
        greetingsName.textContent = localStorage.getItem('name') + ',';
        enterButton.textContent = localStorage.getItem('name');
    }
});

