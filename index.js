const http = require('http')

//app object - module scaffolding
const app = {};
//config object -
app.config = {
    port: 3000,
    host: 'localhost'
  
};
app.createServer = ()=>{
    const server = http.createServer()
    server.listen(app.config.port,()=>{
        console.log(`listening on port ${app.config.host}:${app.config.port}`)
    });
}
//routes object -
app.handleReqRes = (req, res)=>{
    
    res.send()
};

app.createServer()