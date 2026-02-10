const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function createTaskElement(taskText) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Введіть завдання!');
        return;
    }

    const li = createTaskElement(taskText);
    taskList.appendChild(li);
    taskInput.value = '';
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    const allLi = document.querySelectorAll('#taskList li');

    allLi.forEach(function (li) {
        const text = li.querySelector('span').textContent;
        tasks.push(text);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

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

addBtn.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
loadTasks();