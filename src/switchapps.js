let menu = document.querySelector('.workflow-apps'); // меню
let menuBtns = menu.children; // элементы меню

let workfield = document.querySelector('.workfield'); // рабочее пространство
let workfieldElements = workfield.children; // элементы рабочего пространства

let activeBtn = document.querySelector('.menu-active'); // активная кнопка меню

let activeParent = activeBtn.parentNode; // родитель активной кнопки

// поиск индекса активной кнопки и переход к другому приложению
let indexChecker = function () {
    for (let k = 0; k < menuBtns.length; k++) {
        if (activeParent.children[k].classList.contains('menu-active')) {
            let index = k;
            setTimeout(() => {
                workfieldElements[index].classList.add('app-switch-backward');
                workfieldElements[index].classList.remove('app-switch-forward');
                workfieldElements[index].classList.remove('hidden');
            }, 600);

        } if (!activeParent.children[k].classList.contains('menu-active')) {
            workfieldElements[k].classList.add('app-switch-forward');
            workfieldElements[k].classList.remove('app-switch-backward');
            setTimeout(() => {
                workfieldElements[k].classList.add('hidden');
            }, 600);
        }
    }
};

// обработчик клика по кнопкам меню
let pressChecker = function (button) {
    button.onclick = function () {
        for (let menuBtn of menuBtns) {
            menuBtn.classList.remove('menu-active');
        }
        button.classList.add('menu-active');
        activeBtn = button;
        indexChecker();
    };
}

// применение обработчика клика на все элементы
for (let i = 0; i < menuBtns.length; i++) {
    pressChecker(menuBtns[i]);
}



// добавление обработчика при загрузке страницы
window.addEventListener('load', function () {
    indexChecker();
    for (let i = 0; i < menuBtns.length; i++) {
        pressChecker(menuBtns[i]);
    }
});
