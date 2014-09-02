'use strict';

var todo = angular.module('todoApp', ['ngResource','ngMessages','ngAnimate','ngRoute']);
todo.factory('ToDa', ['$resource', function($resource){
	var ToDa = $resource('/todo/:id');
	return ToDa;
}]);

todo.config( ['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '../todo.html'
	});
}]);

todo.constant('_', window._);
todo.controller('ToDoController', ['$scope', '$http', 'ToDa','_', function($scope, $http, ToDa, _){
	$scope.messages = {required: false, minlength: false, success: false, delete: false};
	$scope.ntodo = new ToDa();
	$scope.todos = ToDa.query();
	$scope.flag = false;
	$scope.change = function(){
		$scope.flag = true;
	};

	$scope.checkData = function(errorType){
		$scope.messages.delete = false;
		$scope.messages.success = false;
		$scope.messages.required = errorType.required;
		$scope.messages.minlength = errorType.minlength;
	};

	$scope.createTodo = function(todo) {
		var newTodo = new ToDa(todo);
		newTodo.$save(function(data, headers) {
				$scope.ntodo = new ToDa(); // clear the form so our user is ready to enter another
				$scope.messages.delete = false;
				$scope.messages.success = true;
				$scope.todos.push( data);
			},
			function(res){
				console.log('Error: ' + res);
			});
	};

	$scope.deleteTodo = function(todo){ 
		 ToDa.delete({id: todo._id});
		$scope.todos = _.without($scope.todos, todo);
		$scope.messages.success = false;
		$scope.messages.delete = true;
	};
}]);