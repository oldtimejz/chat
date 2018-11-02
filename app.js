var config = require('./config/config');
var port = process.env.PORT || config.port;
var env = process.env.NODE_ENV || 'development';
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var log4js = require('./server/log').log4js;
var logger = require('./server/log').logger;
var socket = require('./server/socket');

//启动服务
var app = express();

var router = express.Router();

//静态入口
app.get('/', function(req, res, next){
  req.url = './index.html';
  next();
});
//申明静态资源地址
app.use(express.static('./static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
//使用session存储
app.use(session({
  secret: 'chat',
  resave: false,
  saveUninitialized: true
}));

var api = require('./config/routes-build')
api(app);

if('development' == app.get('env')){
  app.set('showStackError', true)
  app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO}));
  app.locals.pretty = true;

}
app.listen(port);

