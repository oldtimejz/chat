function socket(server){
  var io = require('socket.io')(server);
  var message = require('./model/message.model');
  var user = {};

  io.on('connection', function(socket){
    console.log('我链接上了')
    socket.on('message', function(message){
      console.log(data);
    });
    socket.on('login', function(data){
      console.log(data);
    });
    socket.on('disconnect', function(){
      console.log('我断了链接');
    });
  });
}
module.exports = socket;
