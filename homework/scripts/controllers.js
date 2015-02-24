angular.module('basic.controllers', [])
.controller('tableCtrl', function($scope, $http) {

	$scope.states=[];
	$scope.reverseStates=[];

	$http.get('http://tiny-pizza-server.herokuapp.com/collections/fancy-table').success(function(response){
		$scope.states=response;
		console.log($scope.states);

	});

	$scope.onNameClick=function() {
		$scope.reverseStates=$scope.states;
		$scope.states=$scope.reverseStates.reverse();

	}


});
