const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");

const permission = require("./middlewares/permission");
const validatePayload = require("./middlewares/validatePayload");
const splitCurrency = require("./utilities/splitCurrency");
const connect = require("./connection/connect");
const product = require("./ressources/product/product.controller");

connect();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("path_to_the_folder_to_serve")); // to serve entire pages

app.get("/signup", (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <h1> Créer un compte </h1>
          <form method="POST">
            <label>email</label><input name="email" />
            <label>password</label><input type="password" name="password" />
            <button>Créer mon compte</button>
          </form>
      </body>
    </html>
  `);
});
app.post("/signup", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <h1> Connexion à mon compte </h1>
          <form method="POST" action="/login">
            <label>email</label><input name="email" />
            <label>password</label><input type="password" name="password" />
            <button>Se connecter</button>
      </body>
    </html>
  `);
});

app.use(express.json());
app.use("/api/v1/products", product);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listenning on port ${process.env.PORT || 3000}`)
);
