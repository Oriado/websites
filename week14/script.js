// const taskInput = document.getElementById('taskInput');
// const addBtn = document.getElementById('addBtn');
// const taskList = document.getElementById('taskList');

// function createTaskElement(taskText) {
//     const li = document.createElement('li');
//     const span = document.createElement('span');
//     span.textContent = taskText;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Видалити';
//     deleteBtn.className = 'delete-btn';

//     deleteBtn.addEventListener('click', function () {
//         li.remove();
//         saveTasks();
//     });

//     li.appendChild(span);
//     li.appendChild(deleteBtn);

//     return li;
// }

// function addTask() {
//     const taskText = taskInput.value.trim();

//     if (taskText === '') {
//         alert('Введіть завдання!');
//         return;
//     }

//     const li = createTaskElement(taskText);
//     taskList.appendChild(li);
//     taskInput.value = '';
//     saveTasks();
// }

// function saveTasks() {
//     const tasks = [];
//     const allLi = document.querySelectorAll('#taskList li');

//     allLi.forEach(function (li) {
//         const text = li.querySelector('span').textContent;
//         tasks.push(text);
//     });

//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// function loadTasks() {
//     const saved = localStorage.getItem('tasks');

//     if (saved) {
//         const tasks = JSON.parse(saved);

//         tasks.forEach(function (taskText) {
//             const li = createTaskElement(taskText);
//             taskList.appendChild(li);
//         });
//     }
// }

// addBtn.addEventListener('click', addTask);


// taskInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });
// loadTasks();

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');

function createTaskElement(taskText, isCompleted = false) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;

    if (isCompleted) {
        li.classList.add('completed');
    }

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Виконано';
    completeBtn.className = 'complete-btn';

    completeBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
        saveTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(completeBtn);
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
        const isCompleted = li.classList.contains('completed');
        tasks.push({ text: text, completed: isCompleted });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem('tasks');

    if (saved) {
        const tasks = JSON.parse(saved);

        tasks.forEach(function (task) {
            const li = createTaskElement(task.text, task.completed);
            taskList.appendChild(li);
        });
    }
}

function clearAllTasks() {
    if (taskList.children.length === 0) {
        alert('Список вже порожній!');
        return;
    }

    if (confirm('Ви впевнені, що хочете видалити всі завдання?')) {
        taskList.innerHTML = '';
        localStorage.removeItem('tasks');
    }
}

addBtn.addEventListener('click', addTask);

if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAllTasks);
}

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

loadTasks();