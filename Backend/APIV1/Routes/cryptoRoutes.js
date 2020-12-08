const express = require('express')
const cryptoService = require('../Services/cryptoServices')


const crypto = express.Router()


crypto.get('/all',async (req,res,next)=>{

})

crypto.post('/newBlockChain',async (req,res,next)=>{
  let data = await cryptoService.createBlockChain().catch(next)
   res.json({data:data})
})

module.exports = crypto
