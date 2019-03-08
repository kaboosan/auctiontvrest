// User.js
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  bid: Number,
  datebid: { type: Date, default: Date.now }
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
