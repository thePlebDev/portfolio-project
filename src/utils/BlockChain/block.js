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
  }
  calculateHash(){
    return sha256(this.index + this.previHash + this.timestamp + this.data )
  }
}

export default Block;
