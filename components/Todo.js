class Todo {
    constructor (data, selector) {
        this._data = data;
        this._templateElement = document.querySelector(selector);
    }

    _setEventListeners() {
        this._todoCheckboxEl.addEventListener("change", () => {
            this._data.completed = !this._data.completed;
            console.log(this._data.completed);
        });

        this._todoDeleteBtn.addEventListener("click", () => {
               this._todoElement.remove();
        });
    }

    _generateCheckboxEl() {
        this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        this._todoLabel = this._todoElement.querySelector(".todo__label");

        this._todoCheckboxEl.checked = this._data.completed;
        this._todoCheckboxEl.id = `todo-${this._data.id}`;
        this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
    }

    _getDate () {
        this._dueDate = new Date(this._data.date);
        if (!isNaN(this._dueDate)) {
            this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            })}`;
        }
    }

    getView() {
        this._todoElement = this._templateElement.content
          .querySelector(".todo")
          .cloneNode(true);
        const todoNameEl = this._todoElement.querySelector(".todo__name");
        this._todoDate = this._todoElement.querySelector(".todo__date");
        this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
        
        todoNameEl.textContent = this._data.name;
        
        this._generateCheckboxEl();
        this._setEventListeners();
        this._getDate();

        return this._todoElement;
    }
}

export default Todo;