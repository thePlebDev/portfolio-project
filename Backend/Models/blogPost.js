const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
  image:{type:String,required:true},
  filters:{type:String,required:true},
  title:{type:String,required:true},
  description:{type:String,required:true},
  body:{type:String,required:true},
  createdAt:{type:Date,default:Date.now}
})

const BlogPost = mongoose.model("BlogPost",BlogSchema)

module.exports = BlogPost
