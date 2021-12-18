const BlockChain = require('./blockchain')

const ingoo = new BlockChain()

const previousBlockHash = "123456789"
const currentBlockData = [
    {
        amount:10,
        sender: 'ingooZZang',
        recipient:'googoo',
    },
    {
        amount:20,
        sender: 'ingooZZang',
        recipient:'googoo',
    },
    {
        amount:30,
        sender: 'ingooZZang',
        recipient:'googoo',
    },
]

const nonce = 100;


console.log(ingoo.proofOfWork(previousBlockHash,currentBlockData)); //141237

console.log(ingoo.hashBlock(previousBlockHash,currentBlockData,80893))



console.log(ingoo.hashBlock(previousBlockHash,currentBlockData,nonce))

//ec90a89a8364d8762ec3d365f2c8c91b1547af493e068009c119356b41f9699b


//새로운 블락 만들기
ingoo.createNewBlock(1111,"aaaaaaa","1a1a1a1a1a1a");

//새로은 트랜잭션 생성 - (총금액, 보내는이, 받는이)
ingoo.createNewTransaction(100,'PACKadffaaf','HONGllalflks') 

//새로운 블락 생성 - 채굴후 얻은 블락(마이닝)
ingoo.createNewBlock(2222,"bbbbbbb","2b2b2b2b2b2b");

//새로은 트랜잭션 생성2 - (총금액, 보내는이, 받는이)
ingoo.createNewTransaction(777,'PACKadffaaf','HONGllalflks') 
//새로은 트랜잭션 생성3 - (총금액, 보내는이, 받는이)
ingoo.createNewTransaction(888,'PACKadffaaf','HONGllalflks') 
//새로은 트랜잭션 생성4. - (총금액, 보내는이, 받는이)
ingoo.createNewTransaction(999,'PACKadffaaf','HONGllalflks') 

//새로운 블락 만들기
ingoo.createNewBlock(3333,"ccccccc","3c3c3c3c3c3c");

//찍어보기
console.log(ingoo.chain[2])