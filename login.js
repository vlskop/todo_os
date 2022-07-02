let enterButton = document.querySelector('#login-btn'); // Кнопка "Войти"
let loginForm = document.querySelector('.login-form'); // Окошко входа
let loginButton = document.querySelector('#login-submit'); // Кнопка "Продолжить"
let userName = document.querySelector('#login-name'); //Область ввода имени
let greetingsName = document.querySelector('.name'); // Имя пользователя после "Привет," под часами

// Работа кнопки войти
enterButton.addEventListener('click', () => {
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        loginForm.classList.add('appear');
    } else {
        loginForm.classList.add('hidden');   
    }
});

// Кнопка продолжить неактивна без имени пользователя
userName.value.onchange = function(evt) {
    evt.preventDefault();
    if (userName.value != "") {
        loginButton.disabled = false;
    }
};

// Работа кнопки Продолжить
loginButton.addEventListener('click', () => {
    greetingsName.textContent = userName.value + ',';
    localStorage.setItem('name', userName.value);
    loginForm.classList.add('hidden');
    enterButton.textContent = userName.value;
    userName.value = '';
})
// Вход по нажатию ENTER
loginForm.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13 && userName.value != "") {
        greetingsName.textContent = userName.value + ',';
        localStorage.setItem('name', userName.value);
        loginForm.classList.add('hidden');
        enterButton.textContent = userName.value;
        userName.value = '';
    }
})

// Показ имени в кнопке входа и приветствии при загрузке 
// (для local storage)
window.addEventListener('load', () => {
    if (localStorage.getItem('name') === null) {
        greetingsName.textContent = '';
        enterButton.textContent = Войти;
    }
     else {
        greetingsName.textContent = localStorage.getItem('name') + ',';
        enterButton.textContent = localStorage.getItem('name');
    }
})

