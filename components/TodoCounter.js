class TodoCounter {
    // todos should be the array of initial todos
    // selector is the selector for the counter text element
    constructor(todos, selector) {
      this._element = document.querySelector(selector)
      this._completed = todos.filter((todo) => todo.completed).length; // number of completed todos
      this._total = todos.length;
      this._updateText();
    }
 
    updateCompleted = (increment) => {
      this._completed += increment ? 1 : -1;
      this._updateText();
    };
  
    updateTotal = (increment) => {
      this._total += increment ? 1 : -1;
      this._updateText(); 
    };
  
    _updateText() {
      // Sets the text content of corresponding text element.  
      // Call this in the constructor, and whenever the counts get updated.
      this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
    }
  }
  
  export default TodoCounter;