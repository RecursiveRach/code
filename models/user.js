var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    unique: true,
    required: true,
  },
  contact : {
    type: Number,
    required: true,
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;