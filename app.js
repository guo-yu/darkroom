//        __           __                            
//   ____/ /___ ______/ /___________  ____  ____ ___ 
//  / __  / __ `/ ___/ //_/ ___/ __ \/ __ \/ __ `__ \
// / /_/ / /_/ / /  / ,< / /  / /_/ / /_/ / / / / / /
// \__,_/\__,_/_/  /_/|_/_/   \____/\____/_/ /_/ /_/                                                     
//
//

// @author: [turingou]
// @created: 2013-06-30
// @brief: darkroom the game
// @github: https://github.com/turingou/darkroom
// @url: http://darkroom.im
// @app: http://darkroom.app.menkr.com

// Darkroom 的代码组织主要如下：
// - index.js 主路由文件
// - menu 菜单路由
// - gm 游戏主控
// - scence 游戏场景，包括会话和工作等
// - model 数据模型
// - ctrler 各个数据模型的控制器

// 主要设计思路
// 通过wxsession管理会话进度，在每个会话的入口根据进度标识挂载相应对话。不同的对话会影响标识。
// 持久化session可以在短期内保持游戏状态。

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('darkroom'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.post('/', require('./routes/index'));

http.createServer(app).listen(app.get('port'));