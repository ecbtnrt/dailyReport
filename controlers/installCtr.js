// Generated by CoffeeScript 1.6.1
(function() {
  var crypto, userModel;

  crypto = require('crypto');

  userModel = require('../models/usersModel');

  exports.install = function(req, res) {
    var hashedPassword, password, userName;
    userName = "admin";
    password = "1234567";
    hashedPassword = crypto.createHash("sha1").update(password).digest('hex');
    return userModel.createDefaultAdmin(userName, hashedPassword, function(response) {
      return res.render("install");
    });
  };

}).call(this);
