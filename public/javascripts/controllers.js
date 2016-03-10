function PollListCtrl($scope, Poll) {
    $scope.polls = Poll.query();
}

function PollNewCtrl($scope, $location, Poll) {
    $scope.poll = {
        choices: [
            { text: '' },
            { text: '' },
            { text: ''}
        ]
    };

    $scope.addChoice = function() {
        $scope.poll.choices.push({ text: ''})
    }

    $scope.createPoll = function() {
        new Poll(this.poll).$save(function(paramaters) {
            if (paramaters.error) {
                alert(paramaters.error);
            } else {
                $location.path('/polls');
            }
        });
    }
}

function PollItemCtrl($scope, $routeParams, Poll) {
    $scope.poll = Poll.get({ id: $routeParams.pollId });
    $scope.vote = function() {};
}