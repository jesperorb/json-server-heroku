var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var fs = require('fs');
var port = process.env.PORT || 3000;


server.use(middlewares);

server.get('/delete', (req, res) => {
  let data = JSON.stringify({ "articles":[] });
  fs.writeFile('./db.json', data, 'utf-8', (error)=>{
    if(error) res.send(error)
    res.send('Success!');
  }) 
});

server.use(router);
server.listen(port, function () {
  console.log('\x1b[36mjson-server is running!');
});


