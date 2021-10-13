const SHA256 = require('crypto-js/sha256'); // SHA256 encryption method

class Block {
    constructor(id, timestamp, data, previousHash = '') { // standard constructor
        this.id = id;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.id + this.previousHash + this.timestamp, +JSON.stringify(this.data)).toString()
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, '01/01/2016', 'Genesis Block', '0'); // the init block is called Genesis Block
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];

    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);

    }
}

let uwuCoin = new Blockchain();
uwuCoin.addBlock(new Block(1, '24/06/2014'), { amount: 2 });
uwuCoin.addBlock(new Block(2, '21/11/2015'), { amount: 4 });

console.log(JSON.stringify(uwuCoin, null, 4));