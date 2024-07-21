const http = require('http')
const url = require('url')
//destructered a class from a library
const {StringDecoder}= require('string_decoder')
const {handleReqRes} = require('./helpers/handelReqRes')
//app object - module scaffolding
const app = {};
//config object -
app.config = {
    port: 3000,
    host: 'localhost'
  
};
app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port,()=>{
        console.log(`listening on port ${app.config.host}:${app.config.port}`)
    });
}
//routes object -
app.handleReqRes = handleReqRes
app.createServer();