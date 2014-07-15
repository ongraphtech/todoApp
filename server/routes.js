'use strict';

var todoCtrl = require('./controllers/todo');

module.exports =  function(app, todo){
	
	todo.post('/todo', function(req, res){
		todoCtrl.create(req, res);
	});

	todo.get('/todo', function(req, res) {
		todoCtrl.all(req, res);
	});

	todo.delete('/todo/:id', function(req, res) {
		todoCtrl.deleteTodo(req, res);
	});

	app.use('/', todo); 

}; 