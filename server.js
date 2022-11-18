const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

//Bind the router db to the app
server.db = router.db;
server.use(middlewares);

const port = process.env.PORT || 9000;
server.use(router);
server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
