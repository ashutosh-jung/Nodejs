const http = require('http');

http.createServer((req, resp)=>{
resp.write("<h2>hello world</h2>");
resp.end("Hello code step by step");
}).listen(4800);

http.createServer((req, resp)=>{
resp.write("<h2>another server</h2>");
resp.end("Hello code step by step");
}).listen(5800);

