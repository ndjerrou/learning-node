const express = require("express");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");

const permission = require("./middlewares/permission");
const validatePayload = require("./middlewares/validatePayload");
const splitCurrency = require("./utilities/splitCurrency");
const connect = require("./connection/connect");
const product = require("./ressources/product/product.controller");

connect();

const app = express();

app.use(express.json());
app.use("/api/v1/products", product);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listenning on port ${process.env.PORT || 3000}`)
);
