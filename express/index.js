const express = require("express");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");

const permission = require("./middlewares/permission");
const validatePayload = require("./middlewares/validatePayload");
const splitCurrency = require("./utilities/splitCurrency");

const app = express();
app.use(express.json()); // a middleware

// a middleware is just a function

// next() : pass to the next middleware
app.use((req, res, next) => {
  console.log("salut, je suis un middleware");

  next();
});

// app.use(permission);

const products = [];

// CRUD - create - delete - update - read

for (let i = 0; i < 20; i++) {
  products[i] = {
    id: uuidv4(),
    name: faker.commerce.productName(),
    price: "$" + faker.commerce.price(),
    desc: faker.commerce.productDescription,
  };
}

// VERB + ENDPOINT
app.get("", (req, res) => {
  //route handler
  // console.log(res);
  //   res.send("Welcome to my website great user");

  const template = `
  <h1>Welcome to my website great user</h1>
  <div class="infos">
        <h2>Quel âge avez-vous ?</h2>
        <input type="range" name="age" id="age" />
  </div>
  `;

  // res.send(template);

  // res.send([1, 2, 3]);

  res.send({ name: "nissim", age: 30 });
});

// endpoints
app.get("/products", (req, res) => {
  console.log("GET /products");

  // get the filter (via query string parameter)
  const queryKeys = Object.keys(req.query);

  if (!queryKeys.length) return res.send(products);
  const { maximumPrice, nbProducts } = req.query;

  const response = [];

  const filteredProducts = products.filter(({ price }) => {
    const numberPrice = splitCurrency(price);
    return numberPrice <= maximumPrice;
  });

  if (filteredProducts.length <= nbProducts) return res.send(filteredProducts);

  for (let i = 0; i <= nbProducts; i++) {
    response.push(filteredProducts[i]);
  }
  res.send(response);
});

// REST [GET /products, GET /products/id, POST /products, UPDATE /products/id, DELETE /products/id]

// id  is a route parameter
app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id === id);

  //@TODO : handle the case where the id is not into the DB

  res.send(product);
});

// ex : make the delete products route available
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  // const filteredProducts = products.filter((product) => product.id !== id);

  const idx = products.findIndex((product) => product.id === id);

  const filteredProducts = products.splice(idx, 1);

  res.send(filteredProducts[0]);
});

app.post("/products", validatePayload, (req, res) => {
  // 1 - validate the incoming payload - npm i joi (joi.dev)

  // cf validatePayload middleware

  const { name, price, desc } = req.body;

  // 2 - create a new product

  const product = {
    id: uuidv4(),
    name,
    price,
    desc,
  };

  // 3 - add to the DB
  products.push(product);

  // 4 - send back the product created
  res.status(201).send(product);
});

app.put("/products", (req, res) => {
  //@TODO
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
