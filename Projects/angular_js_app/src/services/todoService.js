app.service('TodoService', function() {

    var tasks = [
        { id: 1, name: 'Fazer compras', completed: false},
        { id: 2, name: 'Estudar AngularJS', completed: true},
   ];

   this.getTasks = function() {
    return tasks;
   };

   this.addTask = function(newTask) {
    tasks.push({
        id: tasks.length + 1,
        name: newTask,
        completed: false
    })};

    this.removeTask = function(task) {
        var index = task.indexOf(task);
        if (index !== -1) {
            task.splice(index, 1);
        }
    };

    this.updateTask = function(task) {
        task.completed = !task.completed;
    }
    
}
);