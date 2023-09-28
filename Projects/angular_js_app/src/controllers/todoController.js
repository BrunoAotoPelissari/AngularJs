app.controller('TodoController', ['$scope', 'TodoService', function($scope, TodoService) {
    
    $scope.task = TodoService.getTask();

    $scope.addTask = function(newTask) {
        TodoService.addTask(newTask);
        $scope.newTask = '';
    };

    $scope.removeTask = function(task) {
        TodoService.removeTask(task);
    };

    $scope.updateTask = function(task) {
        TodoService.updateTask(task)
    };
    
}]);
