var mongoose = require('mongoose');

// Mongoose connection setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
