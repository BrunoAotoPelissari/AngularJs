var app = angular.module('myApp', ['ng-route']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/tasks', {
            templateUrl: 'templates/todo.html',
            controller: 'TasksDetailController'
        })
        .when('/task/:taskId', {
            templateUrl: 'templates/taskDetail.html',
            controller: 'TaskDetailController'
        })
        .otherwise({
            redirectTo:'/tasks'
        })

}]);

