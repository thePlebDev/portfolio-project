const sha256 = require('sha256');
class Block {
  //going to need a model for this
  // so this is for the individual class
  constructor(index,timestamp,data,prevHash){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.thisHash = sha256(
      this.index + this.timeStamp + this.data + this.prevHash
    );
  }
  clculateHash(){
    return sha256(this.index + this.previousHash + this.timestamp + this.data )
  }
}

module.exports = Block;
