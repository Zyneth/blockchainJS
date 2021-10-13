const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(id, timestamp, data, previousHash = '') {
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