let workflow = document.querySelector('.workflow-container'); // Контейнер рабочей области
let mainflow = document.querySelector('.main'); // Экран блокировки

let mainflowElements = mainflow.children;

let downBtn = document.querySelector('.scroll'); // Кнопка начать работу
let upBtn = document.querySelector('.arrow-up') // Кнопка вернуться на экран блокировки

// При нажатии на начало работы
downBtn.onclick = ()=> {
    workflow.classList.remove('hidden');
    window.scrollTo(0, (document.body.clientHeight - 100));
    
    setTimeout(() => {
        for (let i = 0; i < mainflowElements.length; i++) {
        mainflowElements[i].classList.add('hidden');
        mainflow.classList.add('hidden');
        }
    }, 600); 
};
// Возврат к экрану блокировки
upBtn.onclick = ()=> {

    for (let i = 0; i < mainflowElements.length; i++) {
        if (!mainflowElements[i].classList.contains('login-form')){
        mainflowElements[i].classList.remove('hidden');
        mainflow.classList.remove('hidden');
        }
        }
    window.scrollTo(0, 0);
    setTimeout(() => {  
        
        workflow.classList.add('hidden'); 
    }, 1000);   
};

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


window.onresize = function(){
    if (!workflow.classList.contains('hidden')) {
        window.scrollTo(0, 0);
    }
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}