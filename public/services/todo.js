'use strict';

angular.module('TodoService', []).factory('ToDo', ['$resource'], function($resource){
	return $resource('/todo');
});