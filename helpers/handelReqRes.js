const handler = {};
handler.handleReqRes = (req, res)=>{
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const trimmedPathname = pathname.replace(/^\/+|\/+$/g, '');
    console.log(trimmedPathname);
    const queryStringObject = parsedUrl.query;
    const headers =req.headers;
    //we have to create a object because StringDecoder is a class
    const decoder = new StringDecoder('utf-8');

  

   // The eventEmitter.on() method is used to register
   // listeners, while the eventEmitter.emit() 
   //method is used to trigger the event.
   //data is a in-biuilt event
   let realData= '';

   req.on('data',(buffer)=>{
   realData+=decoder.write(buffer);

   });
   req.on('end', () => {
    realData += decoder.end();
    console.log(realData);

    
    res.end('Hello World');
});
};


module.exports = handler;