'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
   
/**
 * Todo Schema
 */
var TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    }
    
}); 

var todo = module.exports = mongoose.model('ToDo', TodoSchema);

