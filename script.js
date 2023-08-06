// Функция для добавления кнопки удаления к элементу списка
var addDeleteButton = function(listItem) {
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';

  deleteButton.addEventListener('click', function() {
      listItem.parentElement.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
};

// Определение обработчика событий
var handleNewItem = function() {
  var listInput = document.getElementById('listInput');
  var dynamicList = document.getElementById('dynamicList');

  var newListItem = document.createElement('li');
  newListItem.textContent = listInput.value;

  // Добавляем кнопку удаления к новому элементу списка
  addDeleteButton(newListItem);

  dynamicList.appendChild(newListItem);
  
  listInput.value = ''; // очистить поле ввода
};

document.getElementById('addButton').addEventListener('click', handleNewItem);

document.getElementById('listInput').addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
      handleNewItem();
  }
});

// Добавляем кнопки удаления к уже существующим элементам списка
var existingListItems = document.querySelectorAll('#dynamicList li');
existingListItems.forEach(addDeleteButton);
