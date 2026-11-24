const http = require('http');

const userData =[
  {
    name:'Ashutosh Jung',
    age:20,
    email:"ashutosh.jung@example.com"

  },
  {
    name:'Kunta',
    age:20,
    email:"kuntag@example.com"
    
  },
  {
    name:'kuntash',
    age:20,
    email:"kuntash@example.com"
    
  }
]
http.createServer((req, resp)=>{
  resp.setHeader('Content-Type', 'application/json');
  resp.write(JSON.stringify(userData));
  resp.end();

}).listen(6100);
