const sha256 = require('sha256');
// when we call the api we are going to create a block and add it to the old one
class Block {
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

class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()]
  }
  createGenesisBlock(){
    return new Block(0,Date.now(),"genesis block","0")
  }
  getLatestBlock(){
    return this.chain[this.chain.length -1]
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.hash = newBlock.calculateHash()
    this.chain.push(newBlock)
  }
}
