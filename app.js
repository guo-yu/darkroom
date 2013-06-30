//        __           __                            
//   ____/ /___ ______/ /___________  ____  ____ ___ 
//  / __  / __ `/ ___/ //_/ ___/ __ \/ __ \/ __ `__ \
// / /_/ / /_/ / /  / ,< / /  / /_/ / /_/ / / / / / /
// \__,_/\__,_/_/  /_/|_/_/   \____/\____/_/ /_/ /_/                                                     
// 
// @author: [turingou]
// @created: date

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
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