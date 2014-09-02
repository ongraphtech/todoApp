'use strict';

var todoCtrl = require('./server/controllers/todo');

exports = module.exports = function(app, todo) {
 
  //login/out
  
  app.post('/todo', function(req, res){
		todoCtrl.create(req, res);
	});

	app.get('/todo', function(req, res) {
		todoCtrl.all(req, res);
	});

	app.delete('/todo/:id', function(req, res) {
		todoCtrl.deleteTodo(req, res);
	});
};






