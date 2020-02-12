todoList = {

  todos: [],

  addTodos: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    })
    this.showTodos();
  },

  showTodos: function(){
    if(this.todos.length === 0){
      console.log("There are no items to display")
    } else {
      console.log("My todos:");
      for(var i = 0; i < this.todos.length; i++){
        if(this.todos[i].completed === true){
          console.log("(X)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },

  editTodos: function(position, newText){
    if(this.todos.length === 0){
      console.log("There are no items available for edit");
    } else {
      this.todos[position].todoText = newText;
      this.showTodos();  
    }
  },

  deleteTodos: function(position){
    if(this.todos.length === 0){
      console.log("There are no items to delete");
    } else {
      this.todos.splice(position, 1);
      this.showTodos();
    }
  },

  completeTodos: function(position){
    if(position > this.todos.length - 1){
      console.log("There is no item in this list at this position, pleace try agian");
    } else {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.showTodos();
    }
  },

  toggleTodos: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    //Get the number of completed todos
    for(var i = 0; i < totalTodos; i++){
      if(this.todos[i].completed === true){
        completedTodos++;
      }
    }

    //Case1: if everything is true, set all to false
    if(completedTodos === totalTodos){
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
      //Set everything to true
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    
    this.showTodos();
  }
};
console.log(document);
var displayTodosButton = document.getElementById("displayTodosButton");
console.log(displayTodosButton);

displayTodosButton.addEventListener("click", function(){
  todoList.showTodos();
});
