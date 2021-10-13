class Block{
    constructor(id, timestamp, data, previousHash =''){
        this.id = id;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';
    }
}