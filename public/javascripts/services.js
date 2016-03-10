angular.module('pollServices', ['ngResource'])
    .factory('Poll', function($resource) {
        return $resource('api/polls/:id');
    });
