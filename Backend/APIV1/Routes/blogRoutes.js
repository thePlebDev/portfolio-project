const express = require("express");
const BlogPost = require('../Models/blogPost')
const blogService = require('../Services/BlogService')


const blog = express.Router();

function ensureAuthentication(req,res,next){
  console.log(req.user)
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
  //let posts = await BlogPost.find({})

  let data = await blogService.allPosts()
  res.json({status:200,posts:data})
})

blog.post('/new',ensureAuthentication,async(req,res,next)=>{
  const {image,filters,title,description,body} = req.body
  const newBlogPost = new BlogPost({// moved to data access layer inside of subscriber
    image,
    filters,
    title,
    description,
    body
  })
  newBlogPost.save(function(err){// moved to data access layer inside of subscriber
    if(err) return next(err)
    res.json({status:200,message:'Blog Post created'})
  })
})

blog.get('/post',ensureAuthentication,function(req,res){
  res.json({status:200,message:'we have access to this route'})
})

blog.get('/single', async (req,res,next)=>{
  const {obj} = req.query
    let posts =  await BlogPost.findById(obj).exec().catch(next)// moved to data access layer inside of subscriber
    res.json({status:200,posts})


})

module.exports = blog
