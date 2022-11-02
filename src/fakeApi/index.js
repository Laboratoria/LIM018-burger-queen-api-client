const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
server.use(jsonServer.bodyParser)
server.use(middlewares)


const tokenWaiter = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiMDAxIiwiZW1haWwiOiJhLm1lc2Vyb0BidXJnZXIucXVlZW4iLCJyb2xlcyI6eyJ3YWl0ZXIiOnRydWV9fSwiaWF0IjoxNjY2ODc4NDQ0LCJleHAiOjE2NjY5NjQ4NDR9.f-yWd9h35-FptOcf6Jnr8o5djvVgYZGQfJakeubYoXc";
const tokenChef = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiMDAyIiwiZW1haWwiOiJhLmNvY2luZXJvQGJ1cmdlci5xdWVlbiIsInJvbGVzIjp7ImNoZWYiOnRydWV9fSwiaWF0IjoxNjY2ODc4NDQ0LCJleHAiOjE2NjY5NjQ4NDR9.feNGSBxBvGnisSwvSLJvMfUfqPRdbGWLwe7ai--lBiY";
const tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiMDAzIiwiZW1haWwiOiJhLmFkbWluQGJ1cmdlci5xdWVlbiIsInJvbGVzIjp7ImFkbWluIjp0cnVlfX0sImlhdCI6MTY2Njg3ODQ0NCwiZXhwIjoxNjY2OTY0ODQ0fQ.L4q-nBauOLhRcNoL_viCHo9qLwQxRusN5tmWfEbnUdk";

server.use((req, res, next) => {
    // console.log(req.headers);
  if(req.method === "POST" && req.path === "/auth") {
   next();
  } else if(req.headers.authorization === `Bearer ${tokenWaiter}` 
    || req.headers.authorization === `Bearer ${tokenChef}`
    || req.headers.authorization === `Bearer ${tokenAdmin}`) {
   next()
  } else {
   res.sendStatus(401)
  }
})

server.post('/auth', (req, res) => {
  const users = [
    {
      email: "a.mesero@burger.queen",
      password: "123456"
    },
    {
      email: "a.cocinero@burger.queen",
      password: "123456"
    },
    {
      email: "a.admin@burger.queen",
      password: "123456"
    }
  ];
  
  const userEmail = users.map(user => user.email);
  const userPassword = users.map(user => user.password);

    if (userEmail.includes(req.body.email) 
    && userPassword.includes(req.body.password)) {
      if (req.body.email === "a.mesero@burger.queen"){
        res.jsonp({
          token: tokenWaiter
        })
      } else if (req.body.email === "a.cocinero@burger.queen"){
        res.jsonp({
          token: tokenChef
        })
      } else {
        res.jsonp({
          token: tokenAdmin
        })
      }
    } else {
        res.status(400).send('Bad Request')
    }    
})

server.post('/orders', async (req, res) => {
  try {
    const today = new Date();
    console.log(today, 'hoy');
    const now = today.toLocaleString('en-US');
    const order = {
      id: req.body.id,
      userId: req.body.userId,
      client: req.body.client,
      products: req.body.products,
      status: 'pending',
      dateEntry: now,
    };

    // para añadir el id
    const orders = router.db.get('orders');
    console.log("orders ->", orders);
    console.log("largo de orden", orders.__wrapped__.orders.length);
    console.log("wrapped", orders.__wrapped__);
    
    order.id = orders.__wrapped__.orders.length + 1;

    const result = await orders.push(order).write();
    console.log("result", result);
    res.status(200).jsonp(order);

  } catch(err){
    res.status(400).send("No se indica Id, o se intenta crear una orden sin productos");
    res.status(401).send("No hay cabecera de autenticación");
  }
});


// Para probar sí esta corriendo el servidor
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
