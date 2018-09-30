const delay = 2000;
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  setTimeout(next, delay);
});

server.use(middlewares);
server.use(router);

server.listen(port);
