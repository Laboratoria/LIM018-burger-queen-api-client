const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

const secret = "EsUnSecreto"
const tknMesero = "Mesero"
const tknCocinero = "Cocinero"
const tknAdmin = "Admin"


server.use(jsonServer.bodyParser)
server.use(middlewares)


server.use((req, res, next) => {

  // console.log(req.headers);


  if (req.method === "POST" && req.path === "/auth") {
    next();
  } else if (req.headers.authorization === `Bearer ${tknMesero}` || `Bearer ${tknCocinero}` || `Bearer ${tknAdmin}`) {
    if (req.path === '/orders' && req.method === 'POST') {
      if (req.body.products.length === 0 || req.body.userId === undefined) {
        res.status(400).send('Bad request');

      }
    }
    next();
  } else {
    res.sendStatus(401)
  }
})


server.post('/auth', (req, res) => {

  const us = router.db.get('auth').__wrapped__.auth;
  const email = req.body.email;
  const password = req.body.password;


  const userValid = us.filter((x) => { return x.email == email });
  const mapemail = userValid.map((u) => { return u.email })
  const mappassword = userValid.map((u) => { return u.password })
  const maptype = userValid.map((u) => { return u.type })

  if (mapemail == email && mappassword == password) {
    if (maptype == "mesero") {
      res.jsonp({
        token: tknMesero
      })
    }
    if (maptype == "cocinero") {
      res.jsonp({
        token: tknCocinero
      })
    }
    if (maptype == "admin") {
      res.jsonp({
        token: tknAdmin
      })
    }

  }
  else {
    console.log("typo incorrecto")
    res.status(400).send('Bad Request')
  }





  // if (
  //   email == 'leyla@gmail.com' && req.body.password == 'Leyla1234') {
  //   res.jsonp({
  //     token: secret
  //   })
  // } else res.status(400).send('Bad Request')


})
server.post('/orders', async (req, res) => {
  try {
    const prod = router.db.get('products').__wrapped__.products;
    const prodBody = req.body.products;




    // const newProduct=prod.map((pro)=>{
    //   const objPro={
    //     qty: pro.qty,
    //     product: prodxid(pro.productId)
    //   }
    //   return objPro
    // })



    const newProduct = prodBody.map((x) => {
      const objnew = {
        qty: x.qty,
        product: prod.filter((p) => { return p.id == x.productId })
      }
      return objnew

    });








    const today = new Date();
    const now = today.toLocaleString();
    const generateId = Math.random().toString(36).substring(2, 18);
    const order = {
      _id: generateId,
      userId: req.body.userId,
      client: req.body.client,
      products: newProduct,
      status: 'pending',
      dateEntry: now,
    };

    const orders = router.db.get('orders');






    const result = await orders.push(order).write();

    console.log("result", result);
    res.status(200).jsonp(order);

  } catch (err) {
    res.status(400).send("No se indica Id, o se intenta crear una orden sin productos");
    res.status(401).send("No hay cabecera de autenticación");
  }
});


server.put('/orders/:id', async (req, res) => {
  const orders = router.db.get('orders');

  const id = req.params.id;
  const ord = orders.__wrapped__.orders
  // const orderbyId=ord.filter((or)=>{return or._id==id})
  const indexbyId = ord.findIndex(x => id === x._id)

  const upOrds = req.body
  console.log(upOrds);


  orders.__wrapped__.orders.splice(indexbyId, 1, upOrds)
  console.log( orders.__wrapped__.orders, indexbyId)

  await orders.write();
   res.status(200).jsonp(upOrds);












})


server.delete('/orders/:id', async (req, res) => {
  try {
    const orders = router.db.get('orders');
    const ord = orders.__wrapped__.orders
    const id = req.params.id;



    const orderbyId = ord.filter((p) => { return p._id == id })
    const indexbyId = ord.findIndex(x => id === x._id)
    console.log(indexbyId, "holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

    orders.__wrapped__.orders.splice(indexbyId, 1);
    await orders.write();
    res.status(200).jsonp(orderbyId)


  } catch (error) {
    console.log(error)

  }
})


server.delete('/users/:id', async (req, res) => {
  try {
    const users = router.db.get('users');
    const use = users.__wrapped__.users
    const id = req.params.id;



    const userbyId = use.filter((p) => { return p._id == id })
    const indexbyId = use.findIndex(x => id === x._id)
    console.log(indexbyId, "holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

    users.__wrapped__.users.splice(indexbyId, 1);
    await users.write();
    res.status(200).jsonp(userbyId)


  } catch (error) {
    console.log(error)

  }
})



server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})