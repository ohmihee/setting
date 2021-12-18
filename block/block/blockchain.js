const sha256 = require('sha256')

// 블록체인 Class 생성
class BlockChain {
    constructor(){
        this.chain = [];
        this.pendingTransaction = []
        // 제네시스 블록
        this.createNewBlock(100,'0','0')
    }

    //블록을 새로 생성하는 함수
    createNewBlock = (nonce,previousBlockHash,hash) => {
        // 새 블록 생성
        const newBlock = {
            index: this.chain.length + 1,
            tiemstamp: Date.now(),
            transactions: this.pendingTransaction,
            nonce,
            hash,
            previousBlockHash
        }

        this.newTransactions = []
        this.pendingTransaction = []
        this.chain.push(newBlock)

        return newBlock
    }

    //마지막 블록을 가져오는 함수
    getLastBlock = () => {
        return this.chain[this.chain.length -1]
    }

    createNewTransaction = (amount,sender,recipient) => {
        const newTransactions = {
            amount,
            sender,
            recipient
        }

        this.pendingTransaction.push(newTransactions)

        return this.getLastBlock()['index'] + 1
    }

    hashBlock = (previousBlockHash,currentBlockData,nonce) => {
        const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData)
        const hash = sha256(dataAsString)
        return hash
    }
    
    //pow 작업
    proofOfWork = (previousBlockHash,currentBlockData) => {
        let nonce = 0;
        let hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
        while(hash.substring(0,4) != '0000'){
            nonce ++;
            hash = this.hashBlock(previousBlockHash,currentBlockData,nonce)
        }

        return nonce;
    }
}




module.exports = BlockChain