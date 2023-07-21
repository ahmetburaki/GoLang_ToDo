// Elemanları seçme
const todoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");
const deletedList = document.getElementById("deleted-list");
const newTodoInput = document.getElementById("new-todo");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");

// Yeni görev ekleme işlevi
function addTodo() {
    const todoText = newTodoInput.value.trim();
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (todoText !== "" && startDate !== "" && endDate !== "") {
        const li = document.createElement("li");
        li.textContent = todoText + " (Başlangıç: " + startDate + " - Bitiş: " + endDate + ")";

        const doneButton = document.createElement("button");
        doneButton.textContent = "Yapıldı";
        doneButton.classList.add("done-button");
        doneButton.onclick = function() {
            li.remove();
            addToDoneList(todoText, startDate, endDate);
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Sil";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function() {
            li.remove();
            addToDeletedList(todoText, startDate, endDate);
        };

        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);
        newTodoInput.value = "";
        startDateInput.value = "";
        endDateInput.value = "";
    }
}

// Yapılan işleri yapılanlar listesine ekleme işlevi
function addToDoneList(todoText, startDate, endDate) {
    const li = document.createElement("li");
    li.textContent = todoText + " (Başlangıç: " + startDate + " - Bitiş: " + endDate + ")";

    const undoButton = document.createElement("button");
    undoButton.textContent = "Yeniden Çevir";
    undoButton.classList.add("undo-button");
    undoButton.onclick = function() {
        li.remove();
        addTodoBack(todoText, startDate, endDate);
    };

    li.appendChild(undoButton);
    doneList.appendChild(li);
}

// Silinen işleri silinenler listesine ekleme işlevi
function addToDeletedList(todoText, startDate, endDate) {
    const li = document.createElement("li");
    li.textContent = todoText + " (Başlangıç: " + startDate + " - Bitiş: " + endDate + ")";

    const undoButton = document.createElement("button");
    undoButton.textContent = "Yeniden Çevir";
    undoButton.classList.add("undo-button");
    undoButton.onclick = function() {
        li.remove();
        addTodoBack(todoText, startDate, endDate);
    };

    li.appendChild(undoButton);
    deletedList.appendChild(li);
}

// Yapılacakları geri al ve yapılacaklar listesine ekleme işlevi
function addTodoBack(todoText, startDate, endDate) {
    const li = document.createElement("li");
    li.textContent = todoText + " (Başlangıç: " + startDate + " - Bitiş: " + endDate + ")";

    const doneButton = document.createElement("button");
    doneButton.textContent = "Yapıldı";
    doneButton.classList.add("done-button");
    doneButton.onclick = function() {
        li.remove();
        addToDoneList(todoText, startDate, endDate);
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        li.remove();
        addToDeletedList(todoText, startDate, endDate);
    };

    li.appendChild(doneButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
