var mongoose = require('mongoose')
var config = require('../static/js/config')
mongoose.connect(config.mongodb);

var message = new mongoose.Schema({
  username: String,
  msg: String,
  roomid: String,
  time: {
    type: Date,
    default: Date.now()
  }
});

message.statics = {
  fetch: function(cb){
    return this.find({}).sort('time').exec(cb);
  },
  findById: function(id, cb){
    return this.findOne({_id: id}).exec(cb);
  }
}
var Message =  mongoose.model('message', message);
module.exports = Message;
