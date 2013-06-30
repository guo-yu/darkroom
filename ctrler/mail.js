var nodemailer = require("nodemailer"),
    config = require('../config');

exports.send = function() {
  
  var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "gmail.user@gmail.com",
        pass: "userpass"
    }
  });

}