var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    reqired: true,
    minlength: 1,
    trim: true
  }
});

module.exports = { User };
