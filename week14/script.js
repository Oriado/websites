// Знаходимо елементи
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Функція створення завдання
function createTaskElement(taskText) {
    // Створюємо <li>
    const li = document.createElement('li');

    // Створюємо span для тексту
    const span = document.createElement('span');
    span.textContent = taskText;

    // Створюємо кнопку "Видалити"
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.className = 'delete-btn';

    // Подія на кнопку видалення
    deleteBtn.addEventListener('click', function () {
        li.remove();
        saveTasks();
    });

    // Додаємо span і кнопку в <li>
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// Функція додавання завдання
function addTask() {
    const taskText = taskInput.value.trim();

    // Перевірка на порожнє поле
    if (taskText === '') {
        alert('Введіть завдання!');
        return;
    }

    // Створюємо елемент завдання
    const li = createTaskElement(taskText);

    // Додаємо <li> у список
    taskList.appendChild(li);

    // Очищаємо input
    taskInput.value = '';

    // Зберігаємо в localStorage
    saveTasks();
}

// Функція збереження завдань
function saveTasks() {
    const tasks = [];
    const allLi = document.querySelectorAll('#taskList li');

    allLi.forEach(function (li) {
        // Беремо текст з span
        const text = li.querySelector('span').textContent;
        tasks.push(text);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Функція завантаження завдань
function loadTasks() {
    const saved = localStorage.getItem('tasks');

    if (saved) {
        const tasks = JSON.parse(saved);

        tasks.forEach(function (taskText) {
            const li = createTaskElement(taskText);
            taskList.appendChild(li);
        });
    }
}

// Подія на кнопку "Додати"
addBtn.addEventListener('click', addTask);

// Додавання по Enter
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Завантажуємо завдання при відкритті сторінки
loadTasks();