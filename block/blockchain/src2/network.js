// ws 
const WebSocket = require('ws')

let sockets = [] // 내가 접속한 사람들의 특정사람에게만 내용을 전달하고싶어서.
// 내자신을 WS 서버로 만들겠다.
function wsInit(){
    const server = new WebSocket.Server({ port:6005 })
    server.on("connection",(ws)=>{
        init(ws)
        // ws.on("message",()=>{})
        // ws.send("text~~")
    })
}

function init(ws){
    sockets.push(ws)
    initMessageHandler(ws)
    initErrorHandler(ws)
}

function initErrorHandler(ws){
    ws.on("close",()=> CloseConnection(ws))
    ws.on("error",()=> CloseConnection(ws))
}

function CloseConnection(ws){
    console.log(`Connection Close ${ws}`)
    sockets.splice(sockets.indexOf(ws), 1)
}

const MessageActin = {
    QUERY_LAST:0,
    QUERY_ALL:1,
    RESONPONSE_BLOCK:2
}

function initMessageHandler(ws){
    ws.on("message", (data) => {
        const message = JSON.parse(data) 
        // { type: 'msg', data: '안녕하세요.' }
        console.log(message.type)
        switch(message.type){
            case MessageActin.QUERY_LAST:
                console.log(message.data)
                console.log("msg를 출력한다!")
            break;
            case MessageActin.QUERY_ALL:
                console.log(message.data)
            break;
            case MessageAction.RESONPONSE_BLOCK:
                handleBlockResponse()
            break;
        }
    })
}

function handleBlockResponse(){

}

function write(ws,message) { 
    ws.send(JSON.stringify(message))
}

wsInit()
module.exports = {
    wsInit,
}

/*
    내용을 전달할때.이벤트명도 같이 적어서 보냅니다.

*/



