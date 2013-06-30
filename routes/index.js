var wechat = require('wechat'),
    user = require('../ctrler/user'),
    menu = require('../ctrler/menu');

/*
 * GET home page.
 */

module.exports = wechat('keyboardcat123', wechat.text(function (msg, req, res, next) {
  
  console.log(msg);
  console.log(req.wxsession);

  // 查询用户状态
  user.query(msg.FromUserName,function(u){
    if (u) {
      // 此用户已经注册过一个了
      if (!req.wxsession.uid) {
        req.wxsession.uid = u._id;
      }
      // menu 路由
      if (req.wxsession.step) {
        menu[req.wxsession.step](msg,u);
      } else {
        menu.main();
        res.wait('main');
      }
    } else {
      // 开始新建用户
      user.create({
        FromUserName: msg.FromUserName
      },function(babyID){
        req.wxsession.uid = babyID;
        res.reply('欢迎你，系统已经帮你分配了一个新的身份，想马上开始加入一个darkroom吗？回复『ok』确认')
      })
    }
  })
  // res.reply('我不太清楚你想表达的意思是什么，也许试试发一段文字给我？')

}))