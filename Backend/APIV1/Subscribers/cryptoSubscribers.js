const BlockChain = require('../Models/BlockChain.js')
const Block = require('../Models/Block')

const cryptoSubscriber=(function(){

  return{

    getLatestBlock(){},
    getBlockChain(){},
    addBlock(){},
    async createBlockChain(){
      const chain = await BlockChain.create({
        chain:[]
      })
      let data = chain.save()
      return data
    }
  }
}())

module.exports = cryptoSubscriber
