let notes = JSON.parse(localStorage.getItem('notes')) || [];

function showNotes() {
    const list = document.getElementById('notesList');
    list.innerHTML = '';

    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        list.appendChild(li);
    });
}

document.getElementById('btn').addEventListener('click', function () {
    const input = document.getElementById('text');
    const text = input.value.trim();

    if (text) {
        notes.push(text);
        localStorage.setItem('notes', JSON.stringify(notes));
        input.value = '';
        showNotes();
    }
});

document.getElementById('clearBtn').addEventListener('click', function () {
    notes = [];
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
});

showNotes();