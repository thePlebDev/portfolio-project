const passport = require("passport");
const User = require('./APIV1/Models/User')


module.exports = function(){

  passport.serializeUser(function(user,done){
    done(null,user._id)
  });
  passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
      done(err,user)
    });
  });
};
