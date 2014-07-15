'use strict';

/**
 * Module dependencies.
 */
require('../models/todo');
var mongoose = require('mongoose'),
    ToDo = mongoose.model('ToDo');


exports.create = function(req, res){
	var toDo = new ToDo(req.body);
	toDo.save(function(err, todo, num){
		if(err){
			return res.jsonp(500, {
						error :'Error in saving'}
					);
		}
		console.log(todo);
		return res.jsonp(todo); 
	});	
	
};

exports.all = function(req, res){
	ToDo.find(function(err, todos){
		if(err){
			return res.jsonp(500, {
				error :'Error in retrieving'}
			);
		}
		return res.jsonp(todos);
	});
};

exports.deleteTodo = function(req, res){
	
	ToDo.remove({
		_id: req.params.id
	},function(err){
		if (err) {
            return res.jsonp(500, {
                error: 'Cannot delete the todo'
            });
        }
        return res.jsonp(200,"deleted successfully");
	});
};
