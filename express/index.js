const express = require("express");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

const app = express();

const products = [];

// CRUD - create - delete - update - read

// REST [GET /products, GET /products/id, POST /products, UPDATE /products/id, DELETE /products/id]

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

function splitCurrency(price) {
  const splittedPrice = price.split("$")[1];
  return +splittedPrice;
}

// endpoints

app.get("/products", (req, res) => {
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

// id  is route parameter
app.get("/products/:id", (req, res) => {
  res.send(req.params);

  // récupérer l'id de la requête
  // renvoyer le produit correspondant
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
