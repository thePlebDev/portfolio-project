
const sha256 = require('sha256');
// when we call the api we are going to create a block and add it to the old one
class Block {
  constructor(index,timestamp,data,prevHash){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.thisHash = sha256(
      this.index + this.timeStamp + this.data + this.prevHash
    );
  }
}

const createGenesis =()=> new Block(0,Date.now(),"Genesis Block",'0')
