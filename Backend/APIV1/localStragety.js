const passport = require('passport')
const LocalStragety = require('passport-local').Stragety
const User = require('./Models/User')


passport.use(new LocalStragety(
  function(username,password,done){
    User.findOne({username:username},function(err,user){
      if(err){return done(err)}

      if(!user){
        return done(null,false,{message:'Incorrect username'});
      }
      if(!user.validPassword(password)){
        return done(null,false,{message:'incorrect password'});
      }
      user.checkPassword(password,function(err,isMatch){
        if(err){return done(err)}
        if(isMatch){
          return done(null,user)
        }else{
          return done(null,false,{message:'invalid password'})
        }
      })
    });
  }
))
