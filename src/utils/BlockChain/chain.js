import Block from './block'

class Blockchain{
  // going to need a model for this
  constructor(){
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 1;
  }
  createGenesisBlock(){
    return new Block(0,Date.now(),"genesis block","0")
  }
  getLatestBlock(){
    return this.chain[this.chain.length -1]
  }

  addBlock(newBlock){
    newBlock.prevHash = this.getLatestBlock().hash
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock)
  //  console.log(this.getLatestBlock().hash)
  }
  isChainValid(){
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if(currentBlock.hash !== currentBlock.calculateHash()){
        return false
      }
      if(currentBlock.previousBlock !== previousBlock.hash){
        return false;
      }
     }
     return true
  }
}

export default Blockchain
