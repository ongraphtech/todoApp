'use strict';

var todo = angular.module('todoApp', ['ngResource']);
todo.factory('ToDa', ['$resource', function($resource){
	return $resource('/todo');
}]);

todo.controller('ToDoController', ['$scope', '$http', 'ToDa', function($scope, $http, toDa){
	$scope.formData = {};

	$scope.todos = toDa.query();
	
	$scope.createTodo = function() {
		var newTodo = new toDa($scope.formData);
		newTodo.$save(function(data, headers) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				console.log(data);
				$scope.todos.push( new toDa(data));
			},
			function(res){
				console.log('Error: ' + res);
			});
	};

	$scope.deleteTodo = function(id) {
		$http.delete('/todo/' + id)
			.success(function(data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
	
}]);