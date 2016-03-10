angular.module('polls', ['ngRoute', 'pollServices'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/polls', {
                templateUrl: '/partials/list',
                controller: PollListCtrl
            })
            .when('/new', {
                templateUrl: '/partials/new',
                controller: PollNewCtrl
            })
            .when('/poll/:pollId', {
                templateUrl: '/partials/item',
                controller: PollItemCtrl
            })
            .otherwise({ redirectTo: '/polls'});
    });
