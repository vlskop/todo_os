let workflow = document.querySelector('.workflow-container');
let mainflow = document.querySelector('.main');
let downBtn = document.querySelector('.scroll');
let upBtn = document.querySelector('.go-up')

downBtn.onclick = ()=> {
    workflow.classList.remove('hidden');
    window.scrollTo(0, 1080);
    setTimeout(() => {
        mainflow.classList.add('hidden');
    }, 600); 
}

upBtn.onclick = ()=> {
    mainflow.classList.remove('hidden');
        window.scrollTo(0, 0);
    setTimeout(() => {  
        workflow.classList.add('hidden');
    }, 1000); 
}