const express = require("express");
const BlogPost = require('../Models/blogPost')


const blog = express.Router();

function ensureAuthentication(req,res,next){
  console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
      next()
    }else{
      res.json({
        status:400,
        message:'not allowed'
      })
    }
}

blog.get('/all',async (req,res)=>{

  let posts = await BlogPost.find({})
  res.json({status:200,posts:posts})
})

blog.post('/new',async(req,res,next)=>{
  const {image,filters,title,description,body} = req.body
  console.log('inside of the post creations route')
  const newBlogPost = new BlogPost({
    image,
    filters,
    title,
    description,
    body
  })
  newBlogPost.save(function(err){
    if(err) return next(err)
    res.json({status:200,message:'Blog Post created'})
  })
})

blog.get('/post',ensureAuthentication,function(req,res){
  res.json({status:200,message:'we have access to this route'})
})

blog.get('/single', async (req,res,next)=>{
  const {obj} = req.query
    let posts =  await BlogPost.findById(obj).exec().catch(next)
    res.json({status:200,posts})


})

module.exports = blog
