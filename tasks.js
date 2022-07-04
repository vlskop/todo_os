let taskList = document.querySelector('.task-list'); // div листа задач
let items = taskList.children; // дочерние элементы листа задач
let template = document.querySelector('#task-template').content; // содержимое шаблона html
let newTask = template.querySelector('.new-task'); // div с содержимым новой задачи
let inputText = document.querySelector('.task-text'); // поле ввода задачи
let addTaskBtn = document.querySelector('.new-item-form'); // кнопка добавления задачи

let doneField = document.querySelector('.done');
let doneList = doneField.querySelector('.task-list');
let doneItems = doneList.children;
let emptyListMsg = doneList.querySelector('.empty-list-msg');
 
let container = document.querySelector('.todo-field');

let toggleEmptyMsg = () => {
  if (doneItems.length > 1) {
    emptyListMsg.classList.add('hidden');
  }
}

let autoDeleteOverflow = () => {
  if (doneItems.length > 10) {
      doneItems[10].classList.add('getup');
      setTimeout(function(){
        doneItems[10].remove(); 
      }, 300);
        
  }
};

// Обработчик чекбоксов на удаление элементов
let addCheckHandler = function (item) {
  let checkbox = item.querySelector('.done-checkbox');
  checkbox.addEventListener('change', function () {
    
    item.classList.remove('getdown');
    item.classList.add('getup');
   
    setTimeout(function() {
      let replaced = item.cloneNode(true);
      replaced.classList.remove('getup');
      replaced.classList.add('getdown');
      let checkboxOut = replaced.querySelector('label');
      checkboxOut.classList.add('hidden');
      replaced.querySelector('.task-content').style.width = '90%';
      doneList.prepend(replaced);
      autoDeleteOverflow();
      toggleEmptyMsg();
      item.remove();
    }, 250);

      let session = container.innerHTML;
      localStorage.setItem('session', session);

  });
};

// Возврат данных из localStorage
window.addEventListener('load', function(){
  if (this.localStorage.getItem('session') == null) {
    console.log('Нет сохранённых данных');
  }
  else {
  container.innerHTML = localStorage.getItem('session');
  for (let i = 0; i < items.length; i++) { // добавляем обработчик чекбокса возвращённым элементам
    addCheckHandler(items[i]);
  }
}
});


// Кнопка добавления задачи
addTaskBtn.onsubmit = function (evt) {
  evt.preventDefault();
  if (inputText.value.length == 0) { // если содержимое поля ввода пустое
    console.log('Нет текста задачи!');
  } else {
    let taskText = inputText.value;  // задаём переменную содержащую текст поля ввода
    let clonedElement = newTask.cloneNode(true); // клонируем содержимое div с задачей вместе с дочерними эл-тами
    let taskContent = clonedElement.querySelector('.task-content'); // назначаем поле текстового содержимого
    taskContent.textContent = taskText; // назначаем полю содержимое

    addCheckHandler(clonedElement); // добавляем новому элементу обработчик чекбокса
    clonedElement.classList.add('getdown'); // добавляем красоту (плавное выплывание контента)

    taskList.appendChild(clonedElement); // вносим новую задачу в список

      let session = container.innerHTML;
      localStorage.setItem('session', session);

    inputText.value = ''; // очистка поля ввода
  }
};