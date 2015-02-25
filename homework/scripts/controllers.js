angular.module('basic.controllers', [])
.controller('tableCtrl', function($scope, $http) {

	$scope.states=[];
	$scope.reverseStates=[];
	$scope.filterBy='';
	$scope.stateArrow = true;

	$http.get('http://tiny-pizza-server.herokuapp.com/collections/fancy-table').success(function(response){
		$scope.states=response;
		// console.log($scope.states);

		$scope.states = _.sortBy($scope.states, function(element) {
			return element.name + element.abbreviation;
		})

		$scope.secondArray = _.sortBy($scope.states, function(element) {
			return element.name + element.abbreviation;
			console.log($scope.secondArray);
		})

	});

	$scope.onNameClick=function() {
		$scope.reverseStates=$scope.secondArray;
		$scope.secondArray=$scope.reverseStates.reverse();
		console.log($scope.secondArray);
	};

	$scope.$watch('filterBy', function(){
	 $scope.secondArray=_.filter($scope.states, function(element) {
		return element.name.toLowerCase().indexOf($scope.filterBy.toLowerCase()) === 0 ||
		element.abbreviation.toLowerCase().indexOf($scope.filterBy.toLowerCase()) === 0;

	});

	});

	$scope.stateArrow = !$scope.stateArrow;
});
