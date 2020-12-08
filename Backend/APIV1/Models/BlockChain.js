const mongoose = require('mongoose');
//const cryptoSubscriber = require('../Subscribers/cryptoSubscribers')
const cryptoSubscriber = require('../Subscribers/cryptoSubscribers')



const BlockChainSchema = mongoose.Schema({
  // so we need a schema that is going to hold a bunch of blocks
  chain:[]

})


const BlockChain = mongoose.model('BlockChain',BlockChainSchema) //this is the model compiled

module.exports = BlockChain
