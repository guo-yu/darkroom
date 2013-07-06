var wechat = require('wechat'),
    List = wechat.List;

// 挂载对话等候
var _init = function(sc,item,res) {
  List.add(sc,item);
  res.wait(sc);
}

exports.load = function(tag,pb,menu,res) {
  var waiter = [];
  // 对话分隔符也可以抽象出来
  var devider = ',';
  var pbarray = pb.split(devider);
  for (var i = 0; i < pbarray.length; i++) {
    var l = [pbarray[i]];
    waiter.push(l);
  };
  waiter = waiter.concat(menu);
  _init(tag,waiter,res);
}