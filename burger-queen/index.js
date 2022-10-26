const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

const secret = "EsUnSecreto"

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.use((req, res, next) => {

  console.log(req.headers);


  if(req.method === "POST" && req.path === "/auth") {
   next();
  } else if(req.headers.authorization === `Bearer ${secret}`) {
  next()
  } else {
  res.sendStatus(401)
  }
 })


server.post('/auth', (req, res) => {

  if (
    req.body.email === 'leyla@gmail.com' && req.body.password === 'Leyla1234') {
    res.jsonp({
      token: secret
    })
  } else res.status(400).send('Bad Request')
  
  
})
server.post('/orders', async (req, res) => {
  try {
    const today = new Date();
    const now = today.toLocaleString();
    const order = {
      
      userId: req.body.userId,
      client: req.body.client,
      products: req.body.products,
      status: 'pending',
      dateEntry: now,
    };

    const orders = router.db.get('orders');
    
    

   
    
    const result = await orders.push(order).write();
    
    console.log("result", result);
    res.status(200).jsonp(order);

  } catch(err){
    res.status(400).send("No se indica Id, o se intenta crear una orden sin productos");
    res.status(401).send("No hay cabecera de autenticación");
  }
});



server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})