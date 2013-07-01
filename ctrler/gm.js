var sc = require('./scence');

// 正式开始进入游戏模式
exports.home = function(msg,user,req,res) {
  // 在这里判断游戏的场景
  var sc = req.wxsession.sc;
  room.queryById(home.door,function(r){
    if (r.open) {
      req.wxsession.sc = 'action';
      res.reply(sc.home(r));
    } else {
      res.reply(sc.gmover(r));
    }
  });

}

// 玩家动作
exports.action = function(msg,user,req,res) {
  
}