class Task {
    constructor(id, description, important) {
        this.id = id;
        this.description = description;
        this.important = important;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}

class TaskManager {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.loadTasks();
    }

    addTask(description, important) {
        const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
        const task = new Task(id, description, important);
        this.tasks.push(task);
        this.saveTasks();
        this.renderTasks();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.renderTasks();
    }

    editeNote(id){
        const note = this.tasks.find(task => task.id === id)
        const app = document.getElementById('app')
        const div = document.createElement('div');
        div.innerHTML = `
            <div id="modal" class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <form id="note-form">
                        <label for="note-description">Description:</label>
                        <input type="text" id="note-description" name="description" value=${note.description}><br>
                        <label for="note-importante-edit">Importante:</label>
                        <input type="checkbox" id="note-importante-edit" name="important" ${note.important? 'checked' : undefined}><br>
                        <button type="button" id="save-note">Save</button>
                    </form>
                </div>
            </div>
        `/*html*/;
        app.appendChild(div)
        const closeButton = document.getElementsByClassName("close-button")[0];
        closeButton.onclick = function() {
            div.parentNode.removeChild(div);
        }
        const saveNoteButton = document.getElementById('save-note');
        saveNoteButton.addEventListener("click",() => {
            const importedit = document.getElementById('note-importante-edit');
            console.log(this.tasks, importedit)
            this.tasks.forEach((note) => {
                if(note.id === id){
                    note.description = document.getElementById('note-description').value;
                    note.important = document.getElementById('note-importante-edit').checked;
                }
            })
            console.log(note.description);
            div.parentNode.removeChild(div);
            this.renderTasks();
        });
        }

    toggleTaskComplete(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.toggleComplete();
            this.saveTasks();
            this.renderTasks();
        }
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    loadTasks() {
        console.log(this.tasks)
        this.renderTasks();
    }

    renderTasks() {
        const taskList = document.getElementById('note-list');
        const noteListImportan = document.getElementById('note-list-important');

        noteListImportan.innerHTML = '';
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const item = document.createElement('li');
            item.textContent = task.description;
            item.className = task.completed ? 'completed' : '';
            item.addEventListener('click', () => this.toggleTaskComplete(task.id));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation(); 
                this.deleteTask(task.id);
            });
            const EditButton = document.createElement('button');
            EditButton.textContent = 'editar';
            EditButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.editeNote(task.id);
            });

            item.appendChild(deleteButton);
            item.appendChild(EditButton);
            if (task.important) {
                noteListImportan.appendChild(item);
            } else {
                taskList.appendChild(item);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();

    document.getElementById('add-note').addEventListener('click', () => {
        const newTask = document.getElementById('new-note').value;
        const noteImportante = document.getElementById('note-important').checked;
        console.log(noteImportante)
        if (newTask) {
            taskManager.addTask(newTask, noteImportante);
            document.getElementById('new-note').value = '';
        }
    });
});