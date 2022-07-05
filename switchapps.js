let menu = document.querySelector('.workflow-apps'); // меню
let menuBtns = menu.children; // элементы меню

let workfield = document.querySelector('.workfield');
let workfieldElements = workfield.children;

let activeBtn = document.querySelector('.menu-active');

let activeParent = activeBtn.parentNode;


let indexChecker = function() {
    for (let k = 0; k < menuBtns.length; k++) {
            if (activeParent.children[k].classList.contains('menu-active')) {
                let index = k;
                setTimeout(() => {
                    workfieldElements[index].classList.add('app-switch-backward');
                    workfieldElements[index].classList.remove('app-switch-forward');   
                    workfieldElements[index].classList.remove('hidden');                     
                }, 500);
 
             }
             else {
                workfieldElements[k].classList.add('app-switch-forward');
                    workfieldElements[k].classList.remove('app-switch-backward');
                    setTimeout(() => {
                    workfieldElements[k].classList.add('hidden');       
                    }, 500);          
             }
    }
};

let pressChecker = function(button) { // обработчик клика по кнопкам меню
    button.onclick = function() {
        for (let menuBtn of menuBtns) {
            menuBtn.classList.remove('menu-active');
        }
        button.classList.add('menu-active');
        activeBtn = button;
        indexChecker();
    };
}


for (let i = 0; i < menuBtns.length; i++) {
    pressChecker(menuBtns[i]);
}

window.addEventListener('load', function(){
    indexChecker();
    for (let i = 0; i < menuBtns.length; i++) {
        pressChecker(menuBtns[i]);
    }
});

localStorage.clear();