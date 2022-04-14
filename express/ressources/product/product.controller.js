const express = require("express");
const Product = require("../../models/Product");

const router = express.Router();

router.route("").get(async (req, res) => {
  const products = await Product.find();

  res.send(products);
});

module.exports = router;
