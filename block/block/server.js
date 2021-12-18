const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('helloworld!')
})

app.get('/start', (req,res) => {
    res.send('comming start');
})

app.post("/stop" , (req,res) => {
    res.send(`msg : stopping server`)
    process.exit()
})

app.listen(3000,()=>{
    console.log('server port 3000')
})