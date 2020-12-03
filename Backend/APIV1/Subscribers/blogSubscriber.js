const BlogPost = require('../Models/blogPost.js')

 const blogSubscriber =(function(){

  return{
    async allPosts(){
      try{
        let data = await BlogPost.find({})
        return data
      }
      catch(e){
        return e
      }
    },

  async newPost(image,filters,title,description,body){
      try{
        const newBlogPost = new BlogPost({// moved to data access layer inside of subscriber
          image,
          filters,
          title,
          description,
          body
        })
        let data = await newBlogPost.save()
        return data
      }
      catch(e){
        return e
      }
    },

  async singlePost(id){
    try{
      let posts =  await BlogPost.findById(id).exec()
      return posts
    }
    catch(e){
      return e
    }

    }
  }

}())

module.exports = blogSubscriber
