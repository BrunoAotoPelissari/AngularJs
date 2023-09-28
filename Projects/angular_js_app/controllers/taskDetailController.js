app.controller('TaskDetailController', ['$scope', '$routeParams', 'TodoService', function ($scope, $routeParams, TodoService) {
    var taskId = $routeParams.taskId;

    $scope.taks = TodoService.getTaskById(taskId);
    
}])