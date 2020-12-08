import sha256 from 'sha256'
class Block {
  //going to need a model for this
  // so this is for the individual class
  constructor(index,timestamp,data,prevHash){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = sha256(
      this.index + this.timeStamp + this.data + this.prevHash
    );
    this.nonce = 0;
  }
  calculateHash(){
    return sha256(this.index + this.previHash + this.timestamp + this.nonce + this.data )
  }
  mineBlock(difficulty){
    while(this.hash.substring(0,difficulty)!==Array(difficulty + 1).join("0")){
      console.log('computing')
      this.nonce ++;
      this.hash = this.calculateHash()
    }
    console.log("Block mined" + this.hash)
  }
}

export default Block;
