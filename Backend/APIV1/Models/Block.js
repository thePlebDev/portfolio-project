const mongoose = require('mongoose');


const BlockSchema = mongoose.Schema({
  // so we need a schema that is going to hold a bunch of blocks
  index:{type:Number,required:true},
  timeStamp:{type:Date,required:true},
  data:[],
  prevHash:{type:String,required:true},
  thisHash:{type:String,required:true}

})

const Block = mongoose.model('Block',BlockSchema)

module.exports = Block
