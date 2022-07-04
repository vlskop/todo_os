let workflow = document.querySelector('.workflow-container'); // Контейнер рабочей области
let mainflow = document.querySelector('.main'); // Экран блокировки
let downBtn = document.querySelector('.scroll'); // Кнопка начать работу
let upBtn = document.querySelector('.arrow-up') // Кнопка вернуться на экран блокировки

// При нажатии на начало работы
downBtn.onclick = ()=> {
    workflow.classList.remove('hidden');
    window.scrollTo(0, 1080);
    setTimeout(() => {
        mainflow.classList.add('hidden');
    }, 600); 
};
// Возврат к экрану блокировки
upBtn.onclick = ()=> {
    mainflow.classList.remove('hidden');
    console.log('Нажата');
    setTimeout(() => {  
        workflow.classList.add('hidden'); 
    }, 1000);   
};