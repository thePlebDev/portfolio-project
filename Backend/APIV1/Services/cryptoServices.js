
// when we call the api we are going to create a block and add it to the old one
const cryptoSubscriber = require('../Subscribers/cryptoSubscribers')


const cryptoService = (function(){

  return{

    async getLatestBlock(){},

    async getBlockChain(){},

    async addBlock(){},

    async createBlockChain(){
      try{
        let data = await cryptoSubscriber.createBlockChain()
        return data
      }
      catch(e){
        return e
      }

    },
    async createGenesisBlock(){
      try{
        let data = await cryptoSubscriber.createGenesisBlock()
        return data
      }
      catch(e){
        return e
      }
    }
  }
}())

module.exports = cryptoService
