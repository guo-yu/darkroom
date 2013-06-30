// ctrler room
var model = require('../models'),
    room = model.room;

// 创建房间
exports.create = function(baby,cb) {
  var baby = new room(baby);
  baby.save(function(err){
    if (!err) {
      cb(baby._id);
    }
  });
}

// 删除和回收房间
exports.remove = function(id,cb) {
  // 删除完这个用户之后，要联动删除在用户组里的记录才行
  room.findByIdAndRemove(id,function(err){
    cb(id)
  });
}

// 通过公开的房间号码查询房间信息
exports.query = function(openid,cb) {
  room.findOne({
    openid: openid
  }).exec(function(err,u){
    if (!err) {
      if (u) {
        cb(u)
      } else {
        cb(null)
      }
    } else {
      console.log(err)
    }
  })
}

// 加入房间
exports.join = function(userID,roomID,cb) {
    exports.query(roomID,function(r){
      if (r) {
        if (r.user.indexOf(userID) > -1) {
          // 如果该用户已经在这个房间里
          cb('exist')
        } else {
          // 如果该用户没有在这个房间里，添加到房间并且写下记录。
          var players = r.user;
          if (players.length < r.limited) {
            r.user.push(userID);
            r.save(function(err){
              if(!err) {
                cb()
              } else {
                console.log(err)
              }
            })
          } else {
            cb('full')
          }
        }
      } else {
        cb(null)
      }
    })
}