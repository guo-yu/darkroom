/**
 * @brief: 数据库模型
 * @author [turingou]
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = mongoose.createConnection('localhost', 'darkroom');

// 房间
var roomModel = new mongoose.Schema({
  limited: Number,
  open: {
    type: Boolean,
    default: true
  },
  openid: {
    type: Number,
    unique: true
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }]
});

// 用户
var userModel = new mongoose.Schema({
  FromUserName: String,
  location: String,
  avatar: String,
  score: Number,
  rooms: [{
    type: Schema.Types.ObjectId,
    ref: 'room'
  }],
  createdBy: {
    type: Date,
    default: new Date()
  }
});

exports.room = db.model('room', roomModel);
exports.user = db.model('user', userModel);