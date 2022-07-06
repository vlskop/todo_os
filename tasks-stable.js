let taskList = document.querySelector('.task-list');
let items = taskList.children;
let template = document.querySelector('#task-template').content;
let newTask = template.querySelector('.new-task');
let inputText = document.querySelector('.task-text');
let addTaskBtn = document.querySelector('.new-item-form');
let activeField = document.querySelector('.active-tasks');
let label

let session;

let addCheckHandler = function (item) {
  let checkbox = item.querySelector('.done-checkbox');
  checkbox.addEventListener('change', function () {
    item.classList.remove('getdown');
    item.classList.add('getup');
    setTimeout(function() {
      item.remove();
    }, 500);
  });
};




addTaskBtn.onsubmit = function (evt) {
  evt.preventDefault();
  if (inputText.value.length == 0) {
    console.log('Нет текста задачи!');
  } else {
    let taskText = inputText.value;
    let clonedElement = newTask.cloneNode(true);
    let taskContent = clonedElement.querySelector('.task-content');
    taskContent.textContent = taskText;

    addCheckHandler(clonedElement);
    clonedElement.classList.add('getdown');

    taskList.appendChild(clonedElement);

    session = taskList.innerHTML;
    localStorage.setItem('session', session);

    inputText.value = '';
  }
};
