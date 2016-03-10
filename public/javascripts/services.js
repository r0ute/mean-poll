function PollService() {
    var polls = [
        {
            _id: new Date().getTime(),
            question: 'How old are you?',
            choices: [
                { _id: -1, text: '10 - 20' },
                { _id: -2, text: '21 - 30' },
                { _id: -3, text: '40+' }
            ]
        }
    ];

    return {
        add: function(poll) {
            polls.push(poll);
        },
        getAll: function() {
            return polls;
        },
        getById: function(id) {
            return polls.filter(function(val) {
                return val._id == id;
            })[0];
        }

    };
}

angular.module('pollServices', ['ngResource'])
    .factory('Poll', function($resource) {
        return $resource('api/polls/:id');
    });
