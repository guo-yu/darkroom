// ctrler scence

exports.home = function(room) {
  var pb = [
    '伸手不见五指的房间里',
    '似乎只有你一个人',
    '除了自己的喘息声',
    '没有丝毫的动静',
    '压迫感慢慢袭来',
    '不知如何逃脱',
    '- '
  ].join('\n')
  return pb;
}

exports.tool = function(tool) {
  var pb = [
    '你沿着墙壁寻找',
    '发现了一枚' + tool.name,
    '',
  ].join('\n')
  return pb;
}

exports.kill = function(room) {
  var pb = [
    '伸手不见五指的房间里',
    '似乎只有你一个人',
    '除了自己的喘息声',
    '没有丝毫的动静',
    '压迫感慢慢袭来',
    '不知如何逃脱',
    '- '
  ].join('\n')
  return pb;
}

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