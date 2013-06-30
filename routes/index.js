var wechat = require('wechat'),
    user = require('../ctrler/user'),
    List = wechat.List;

List.add('main',[
    ['回复『开始』选择新的房间',function (info, req, res) {

    }],
    ['回复『帮助』查看游戏帮助',function (info, req , res) {
      res.reply([
        '游戏帮助',
        '',
        'darkroom 是一个多人沙盒游戏',
        '你会被分配到一个最多有100人的房间',
        '这个房间里有一些道具',
        '探索房间会获得一些道具',
        '你也可以从随机事件中获得道具',
        '你的目的是从最多100人中胜出',
        '利用道具杀人是被允许的',
        '你也可以从被杀死的玩家手中获得新的道具',
        '谈判可以让合作成为可能',
        '某些道具可以直接打开房间的门，获得胜利',
        '因此获胜并非来自屠杀',
        '还有更多玩法等你来发掘',
        'enjoy darkroom!'
        ].join('\n'))
    }],
    ['回复『成就』查看我所获得的积分',function (info, req,res){
      res.reply('你的积分是10000分');
    }]
  ])
/*
 * GET home page.
 */

module.exports = wechat('keyboardcat123', function (req, res, next) {
  var msg = req.weixin;
    console.log(msg);
    console.log(req.wxsession);
  if (msg.MsgType == 'text') {
    // 查询用户状态
    user.query(msg.FromUserName,function(u){
      if (u) {
        // 此用户已经注册过一个了
        res.reply('欢迎回来，系统正在为你分配一个新的darkroom');
        // res.
      } else {
        // 开始新建用户
        user.create({
          FromUserName: msg.FromUserName
        },function(babyID){
          req.wxsession.uid = babyID;
          res.reply('欢迎你，系统已经帮你分配了一个新的身份，想马上开始加入一个darkroom吗？回复start随机加入，回复help查看游戏规则')
        })
      }
    })
  } else {
    res.reply('我不太清楚你想表达的意思是什么，也许试试发一段文字给我？')
  }
})