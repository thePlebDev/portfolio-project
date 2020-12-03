const blogSubscriber = require('../Subscribers/blogSubScriber')



const blogService=(function(){

  return{
    async allPosts(){
      let data = await blogSubscriber.allPosts()
      return data
    },

    newPost(){},

    SinglePost(){},
  }
}());

module.exports = blogService
