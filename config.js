// get pkg info
var fs = require('fs');

exports.pkg = function(cb) {
  fs.readfile(__dirname + '/package.json',function(d){
    cb(JSON.parse(d))
  })
}