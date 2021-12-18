const WebSocket = require('ws')

const ws = new WebSocket("ws://localhost:6005")

// 연결이완료가 되었고, 최초실행
ws.on('open',() =>{
    write(ws,queryBlockMsg())
    write(ws,queryAllMsg())

    /**
     * String 으로만 보내지게된다. 
     * 
     */
})

const MessageAction = {
    QUERY_LAST:0,
    QUERY_ALL:1,
    RESONPONSE_BLOCK:2
}

function queryBlockMsg(){
    return {
        type:MessageAction.QUERY_LAST,
        data:null
    }
}

function queryAllMsg(){
    return {
        type:MessageAction.QUERY_ALL,
        data:null,
    }
}

function write(ws,message) { 
    ws.send(JSON.stringify(message))
}

ws.on('error',()=>{
    console.log('error 발생!')
})

ws.on('message', (message) => {
    console.log(`received: ${message}`)
})

