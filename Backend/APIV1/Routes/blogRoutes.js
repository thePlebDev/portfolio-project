const express = require("express");


const blog = express.Router();

blog.get('/all',(req,res)=>{
  res.json({content:'this is where all of the data will be'})
})

module.exports = blog
