const express = require("express");
const Product = require("../../models/Product");

const validatePayload = require("../../middlewares/validatePayload");

const router = express.Router();

router
  .route("")
  .get(async (req, res) => {
    const products = await Product.find();

    res.send(products);
  })
  .post(validatePayload, async (req, res) => {
    const { name, price, desc } = req.body;

    const product = new Product({
      name,
      price,
      desc,
    });

    try {
      await product.save();
      res.status(201).send(product);
    } catch (err) {
      res.status(500).send({ err: true, message: err.message });
    }
  });

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const product = await Product.findById({ _id: req.params.id });
      res.send(product);
    } catch (err) {
      res.status(500).send({ err: true, message: err.message });
    }
  })
  .delete(async (req, res) => {
    try {
      await Product.findByIdAndDelete({ _id: req.params.id });
      res.status(200).send("Product deleted");
    } catch (err) {
      res.status(500).send({ err: true, message: err.message });
    }
  });

module.exports = router;
