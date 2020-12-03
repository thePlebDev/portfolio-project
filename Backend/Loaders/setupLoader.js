const cookieParser = require('cookie-parser');
const express = require('express')
const mongoose = require('mongoose');
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

const setupLoader=(function(){
  return{
    setup(app){
      const url = 'mongodb://127.0.0.1:27017/testBlog'
      const dbOptions ={
        useNewUrlParser:true,
        useUnifiedTopology:true
      }
      const connection = mongoose.createConnection(url,dbOptions)
      const sessionStore = new MongoStore({
        mongooseConnection:connection,
        collection:'sessions'
      })

      app.use(express.json())
      app.use(express.urlencoded({extended:true}));
      app.use(cookieParser())
      app.use(session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
        store:sessionStore,
      }))
      app.use(passport.initialize());
      app.use(passport.session())
    }
  }
}())


module.exports = setupLoader
