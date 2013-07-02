// ctrler scence

// 游戏开始
exports.home = function(room) {
  var pb = [
    '伸手不见五指的房间里',
    '似乎只有你一个人',
    '除了自己的喘息声',
    '没有丝毫的动静',
    '压迫感慢慢袭来',
    '不知如何逃脱',
    '',
    '你可以：',
    '- 屏住呼吸 (a)',
    '- 大声呼喊 (b)'
  ].join('\n')
  return pb;
}

// 获得道具
exports.tool = function(tool) {
  var pb = [
    '你沿着墙壁寻找',
    '发现了一枚',
    '『' + tool.name + '』',
    '你感觉到面对无知无边的世界又多了一丝信心',
    '',
    '你准备：',
    '- 查看道具 (' + tool.name + ')',
    '- 原地休息 (a)',
    '- 继续寻找 (b)'
  ].join('\n')
  return pb;
}

// 杀死对方
exports.kill = function(user) {
  var pb = [
    '好吧，无论如何都要尝试一下',
    '你举起了颤抖的双手',
    '朝着身后的未知物体给了重重一击',
    '等你回过神来',
    '他已倒在血泊中动弹不得',
    ''
  ].join('\n');

  var getTools = function(tools) {
    if (tools.length > 0) {
      return [
        '获得道具：',
        '共：' + tools.length + ' 件'
      ].join('\n');
    } else {
      return '';
    }
  };

  return pb + getTools(user.tools);
}

// 被对方杀死
exports.killed = function(user) {
  
}

// 该房间的游戏结束
exports.gmover = function(room) {
  var pb = [
    '这个房间里残留这一丝血气，',
    '破败的窗户摇曳着似乎快要掉落下来，',
    '门敞开着，所发生的一切仿佛一场梦，',
    '你恍惚的走了出去，',
    '回头看了看空空荡荡的黑洞一般的空屋子',
    '墙上血书着',
    'No.' + room.openid,
    '看来，这个房间里的故事结束了。'
  ].join('\n');
  return pb;
}
