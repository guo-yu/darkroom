// get pkg info
var fs = require('fs');
var _config = {
  mail: {
    server: 'smtp.qq.com',
    port: 25,
    useAuth: true,
    email: "",
    password: "",
    from: 'sender <abc@sender.com>'
  }
}

exports.pkg = function(cb) {
  fs.readfile(__dirname + '/package.json',function(d){
    cb(JSON.parse(d))
  })
}

exports.sys = function() {
  return _config;
}