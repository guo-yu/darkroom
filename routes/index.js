var wechat = require('wechat');

/*
 * GET home page.
 */

module.exports = wechat('keyboardcat123', function (req, res, next) {
  var message = req.weixin;
  console.log(message);
})