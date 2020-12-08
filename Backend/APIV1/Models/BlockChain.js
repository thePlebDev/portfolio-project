const mongoose = require('mongoose');



const BlockChainSchema = mongoose.Schema({
  // so we need a schema that is going to hold a bunch of blocks
  chain:[]

})

// I will create a post middleware hook for a genesisBlock

const BlockChain = mongoose.model('BlockChain',BlockChainSchema) //this is the model compiled

module.exports = BlockChain
