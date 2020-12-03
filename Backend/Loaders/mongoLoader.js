const MongoClient = require('mongodb').MongoClient //creates the instance of the MongoClient
const mongoose = require('mongoose');

const mongoLoader =(function(){
  return{
    setup(app){
      const dbName = "testBlog"
      const url = 'mongodb://127.0.0.1:27017/testBlog'
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
    }
  }
}())

module.exports = mongoLoader
