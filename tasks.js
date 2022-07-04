let taskList = document.querySelector('.task-list'); // div листа задач
let items = taskList.children; // дочерние элементы листа задач
let template = document.querySelector('#task-template').content; // содержимое шаблона html
let newTask = template.querySelector('.new-task'); // div с содержимым новой задачи
let inputText = document.querySelector('.task-text'); // поле ввода задачи
let addTaskBtn = document.querySelector('.new-item-form'); // кнопка добавления задачи

let doneField = document.querySelector('.done');
let doneList = doneField.querySelector('.task-list');
let doneItems = doneList.children;
 
if (doneItems.length === 0) {
  let alarm = document.createElement('p');
  alarm.classList.add('alarm');
  alarm.textContent = 'Выполненных задач нет';
  doneList.appendChild(alarm);
}

// Обработчик чекбоксов на удаление элементов
let addCheckHandler = function (item) {
  let checkbox = item.querySelector('.done-checkbox');
  checkbox.addEventListener('change', function () {
    
    item.classList.add('getup');
    item.classList.remove('getdown');
   
    setTimeout(function() {
      item.remove();
    }, 500);

    setInterval(function(){ // сохранение содержимого в localstorage
      let session = taskList.innerHTML;
      localStorage.setItem('session', session);
    }, 100);

  });
};

// Возврат данных из localStorage
window.addEventListener('load', function(){
  taskList.innerHTML = localStorage.getItem('session');
  for (let i = 0; i < items.length; i++) { // добавляем обработчик чекбокса возвращённым элементам
    addCheckHandler(items[i]);
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

    setInterval(function(){ // сохранение содержимого в localstorage
      let session = taskList.innerHTML;
      localStorage.setItem('session', session);
    }, 100);

    inputText.value = ''; // очистка поля ввода
  }
};


  




