let taskList = document.querySelector('.task-list');
let items = taskList.children;
let template = document.querySelector('#task-template').content;
let newTask = template.querySelector('.new-task');
let inputText = document.querySelector('.task-text');
let addTaskBtn = document.querySelector('.add-task-btn');

let session;


addTaskBtn.onclick = function(evt) {
    evt.preventDefault();
    if (inputText.value.length == 0) {
        console.log('Нет текста задачи!');
    }
    else {
    let taskText = inputText.value;
    let clonedElement = newTask.cloneNode(true);
    let taskContent = clonedElement.querySelector('.task-content');
    taskContent.textContent = taskText;

    taskList.appendChild(clonedElement);

    let addCheckHandler = function (item) {
        let checkbox = clonedElement.querySelector('.done-checkbox');
       
        checkbox.addEventListener('change', function () {
            item.remove();   
        });
      };
      
      for (let i = 0; i < items.length; i++) {
        addCheckHandler(items[i]);
      };
    addCheckHandler(clonedElement);

    session = taskList.innerHTML;
    localStorage.setItem('session', session);

    inputText.value = '';
    }
};

