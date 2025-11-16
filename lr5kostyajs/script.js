const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Кнопки сортування
const showAll = document.getElementById("showAll");
const showActive = document.getElementById("showActive");
const showCompleted = document.getElementById("showCompleted");

// Завантаження задач із LocalStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all"; // all | active | completed

renderTasks();

// Додавання нового завдання
taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && taskInput.value.trim() !== "") {
        const newTask = {
            id: Date.now(),
            text: taskInput.value.trim(),
            completed: false,
            date: formatDate(new Date())
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();

        taskInput.value = "";
    }
});

function formatDate(date) {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear().toString().slice(2);
    const h = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");

    return `${d}.${m}.${y}, ${h}:${min}`;
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Основне відмалювання
function renderTasks() {
    taskList.innerHTML = "";

    let filtered = tasks;
    if (filter === "active") filtered = tasks.filter(t => !t.completed);
    if (filter === "completed") filtered = tasks.filter(t => t.completed);

    filtered.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-item";
        if (task.completed) li.classList.add("completed");

        const left = document.createElement("div");
        left.className = "task-left";

        // Чекбокс (лише якщо не виконано)
        if (!task.completed) {
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", () => {
                task.completed = true;
                saveTasks();
                renderTasks();
            });
            left.appendChild(checkbox);
        }

        // Текст завдання
        const text = document.createElement("span");
        text.className = "task-text";
        text.textContent = task.text;

        // Подвійний клік — редагування
        text.addEventListener("dblclick", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = task.text;
            input.className = "edit-input";

            text.replaceWith(input);
            input.focus();

            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter" && input.value.trim() !== "") {
                    task.text = input.value.trim();
                    saveTasks();
                    renderTasks();
                }
            });
        });

        left.appendChild(text);

        // Дата
        const date = document.createElement("span");
        date.className = "task-date";
        date.textContent = task.date;

        left.appendChild(date);

        // Видалення
        const del = document.createElement("span");
        del.className = "delete-btn";
        del.textContent = "✖";

        del.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        li.appendChild(left);
        li.appendChild(del);

        taskList.appendChild(li);
    });
}

// Сортування
showAll.addEventListener("click", () => {
    filter = "all";
    renderTasks();
});

showActive.addEventListener("click", () => {
    filter = "active";
    renderTasks();
});

showCompleted.addEventListener("click", () => {
    filter = "completed";
    renderTasks();
});
