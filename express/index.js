const express = require("express");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

const app = express();

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

// endpoint /products

app.get("/products", (req, res) => {
  // get the filter (via query string parameter)

  const products = [];

  for (let i = 0; i < 10; i++) {
    products[i] = {
      id: uuidv4(),
      name: faker.commerce.productName(),
      price: "$" + faker.commerce.price(),
      desc: faker.commerce.productDescription,
    };
  }

  //ex

  // Vous devez envoyer deux QSP : price (prix maximum) et nbProducts (côté front)

  // intercepter ces QSP

  // Par rapport à ces QSP, vous devez renvoyer la data correspondante

  res.send(products);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`));
