var wechat = require('wechat'),
    List = wechat.List,
    user = require('../ctrler/user'),
    room = require('../ctrler/room');

exports.feedback = function(msg,user) {
  
}

exports.main = function() {
  List.add('main',[
    ['回复{开始} :选择新的房间',function (info, req, res) {
      // 进行一些分配操作
      res.reply('请输入房间号，以『@』号开头，如 @1024 表示加入1024号房间')
    }],
    ['回复{新建} :新建一个房间，和好友一起玩',function (info, req, res) {
      // 新建一个房间
      res.reply('请输入最大人数，以『#』号开头，如 #10 表示最大允许10人同时参加')
    }],
    ['回复{帮助} :查看游戏帮助',function (info, req , res) {
      res.reply([
        '『 Darkroom 游戏帮助 』',
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
        '意味着你可以通过换取道具免除被杀',
        '某些道具可以直接打开房间的门，获得胜利',
        '因此获胜并非来自屠杀',
        '还有更多玩法等你来发掘',
        'enjoy darkroom!'
        ].join('\n'))
    }],
    ['回复{成就} :查看我所获得的积分',function (info, req,res){
      // 查询积分
      res.reply('你的积分是10000分');
    }],
    ['回复{在线} :查看游戏服务器在线人数',function (info, req,res){
      // 查询积分
      res.reply([
          '服务器状态：正常',
          '在线人数：10028262'
        ].join('\n'));
    }],
    ['回复{反馈} :提交你对darkroom的想法',function (info, req,res){
      // 提交反馈
      // 这里要考虑一个情况，就是用户怎么从一开始的路由里进入这个反馈流程是一个问题
      req.wxsession.step = 'feedback';
      res.reply('我正拿着笔准备记下呢，请说：')
    }]
  ]);
}