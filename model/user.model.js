const mongoose = require('mongoose');
const config = require('../static/js/config');
var bcrypt = require('bcryptjs');

mongoose.connect(config.mongodb);

var user = new mongoose.Schema({
  username: String,
  password: String
});

var SALT_WORK_FACTOR = 10;
user.pre('save', function(next){
  var that = this;
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err){
      return next(err);
    }

    bcrypt.hash(that.password, salt, function(err, data){
      if(err) {
        return next(err);
      }
      that.password = data;
      next();
    })
  });
});
user.methods = {
  comparePassword: function(_password, cb){
    bcrypt.compare(_password, this.password, function(err, isMath){
      if(err) return cb(err);
      cb(null, isMath);
    })
  }
}
user.statics = {
  fetch: function(cb){
    return this.find({}).exec(cb);
  },
  findById: function(id, cb) {
    console.log(id)
    return this.findOne({_id: id}).exec(cb)
  }
}
var User = mongoose.model('User', user);
module.exports = User;
