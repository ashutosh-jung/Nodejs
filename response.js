const http = require('http');

const age=20;
const server = http.createServer((req,res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <head></head>
      <title>code step by step</title>
        <body>
        <h1>hello world</h1>
        <h2>`+new Date()+`</h2>


        </body>
      
    </html>`);
  res.end('Ashutosh Jung');
})
server.listen(4800)