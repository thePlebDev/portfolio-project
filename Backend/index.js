const express = require("express");
const MongoClient = require('mongodb').MongoClient //creates the instance of the MongoClient
const mongoose = require('mongoose');

const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const cookieParser = require("cookie-parser");

const apiVersion1 = require('./APIV1')
require('dotenv').config(); // gives me access to variable set in the .env file via 'process.env.VARIABLE_NAME'

const app = express()

const port = 3000
const url = 'mongodb://127.0.0.1:27017/testBlog'
const dbName = "testBlog"
const dbOptions ={
  useNewUrlParser:true,
  useUnifiedTopology:true
}
const connection = mongoose.createConnection(url,dbOptions)
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const sessionStore = new MongoStore({
  mongooseConnection:connection,
  collection:'session'
})
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave:false,
  saveUninitialized:true,
  store:sessionStore
}))

//--------local database setup ----------------------
MongoClient.connect(url,{useNewUrlParser:true},(err,
client)=>{
  if (err) return console.log(err)
  let db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})

mongoose.connect(url,{useNewUrlParser:true})
const db = mongoose.connection
db.once('open',_=>{
  console.log('database connected:',url)
})
db.on('error',err=>{
  console.error('connection error: ',err)
})
//--------------------------------------------------


app.use("/v1",apiVersion1)

//This is global error handling
app.use((error,req,res,next)=>{
  return res.status(500).json({error:error.toString()});
})

app.listen(port,()=>{
  console.log(`listening at http://localhost${port}`)
})
