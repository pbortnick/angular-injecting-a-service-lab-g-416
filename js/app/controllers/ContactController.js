function ContactController($scope, $timeout) {
	$scope.name = 'Pamela';
	$timeout(function () {
    $scope.name = 'Bridget';
}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
