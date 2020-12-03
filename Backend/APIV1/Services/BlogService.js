const blogSubscriber = require('../Subscribers/blogSubScriber')



const blogService=(function(){

  return{
    async allPosts(){
      try{
        let data = await blogSubscriber.allPosts()
        return data
      }
      catch(e){
        return e
      }

    },

    newPost(){},

    SinglePost(){},
  }
}());

module.exports = blogService
