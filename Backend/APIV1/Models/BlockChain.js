const mongoose = require('mongoose');



const BlockChainSchema = mongoose.Schema({
  // so we need a schema that is going to hold a bunch of blocks
  chain:[]

})

const BlockChain = mongoose.model('BlockChain',BlockChainSchema)

module.exports = BlockChain
