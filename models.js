/**
 * @brief: 数据库模型
 * @author [turingou]
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = mongoose.createConnection('localhost', 'darkroom');

// 站点设置
var roomModel = new mongoose.Schema({
  limited: Number,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
});

// 分类与子分类
var userModel = new mongoose.Schema({
  FromUserName: String,
  location: String,
  avatar: String,
  createdBy: {
    type: Date,
    default: new Date()
  }
});

exports.room = db.model('room', roomModel);
exports.user = db.model('user', userModel);