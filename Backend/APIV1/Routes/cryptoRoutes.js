const express = require('express')
const cryptoService = require('../Services/cryptoServices')


const crypto = express.Router()


crypto.get('/all',async (req,res,next)=>{

})

crypto.post('/newBlockChain',async (req,res,next)=>{
  let data = await cryptoService.createBlockChain().catch(next)
  let genesis = await cryptoService.createGenesisBlock().catch(next)
   res.json({data,genesis})
})

module.exports = crypto
