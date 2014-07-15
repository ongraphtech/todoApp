'use strict';

var todo = angular.module('todoApp', ['ngResource']);
todo.factory('ToDa', ['$resource', function($resource){
	var ToDa = $resource('/todo/:id');
	return ToDa;
}]);

todo.constant('_', window._);
todo.controller('ToDoController', ['$scope', '$http', 'ToDa','_', function($scope, $http, ToDa, _){
	$scope.formData = {};
	$scope.todos = ToDa.query();
	$scope.createTodo = function() {
		var newTodo = new ToDa($scope.formData);
		newTodo.$save(function(data, headers) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos.push( data);
			},
			function(res){
				console.log('Error: ' + res);
			});
	};

	$scope.deleteTodo = function(todo){ 
		 ToDa.delete({id: todo._id});
		$scope.todos = _.without($scope.todos, todo);
		 // $scope.todos=ToDa.query();
	};
}]);