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

mongoose.model('ToDo', TodoSchema);
