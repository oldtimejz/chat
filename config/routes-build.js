var User = require('../model/user.model');
var message = require('../model/message.model');
var util = require('util');

module.exports = function(app){
  app.use(function(req, res, next){
    var user = req.session.user;
    app.locals.user = user;
    next();
  })

  app.post('/api/user/reg', function(req,res){
    var _user = req.body

    User.findOne({username: _user.username}, function (err, data) {
      if(err) console.log(err);
      if(data){
        res.json({
          info: 1,
          data: '用户名已经存在'
        })
      }else{
        var user = new User(_user);
        user.save(function(err, data){
          if(err) console.log(err);
          res.json({
            info: 0,
            data: '注册成功'
          });
        })
      }
    });
  })

  app.post('/api/user/login', function(req, res){
      console.log('我在这里')
      var _user = req.body;
      var username = req.body.username;
      var password = req.body.password;
      User.findOne({username:username}, function(err, data){
        if(err) console.log(err);
        if( !data ){
          res.json({
            info: 1,
            data: '用户名不存在'
          })
        } else {
          if(!!password){
            data.comparePassword(password, function(err, isMath){
              if(err)
                console.log(err)
              if(isMath){
                req.session.user = data;
                console.log('success');
                res.json({
                  info: 0,
                  data: '登录成功'
                });
              }
            })
          }else{
            res.json({
              info: 2,
              data: '密码不正确'
            });
          }
        }
      });
    });
}

