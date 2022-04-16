const express = require("express");
const Product = require("../../models/Product");

const validatePayload = require("../../middlewares/validatePayload");
const { findById } = require("../../models/Product");

const router = express.Router();

router
  .route("")
  .get(async (req, res) => {
    const products = await Product.find();

    res.send(products);
  })
  .post(validatePayload, async (req, res) => {
    const { name, price, desc } = req.body;

    const shapeProduct = {};

    for (let key in req.body) {
      shapeProduct[key] = req.body[key];
    }

    product = new Product(shapeProduct);

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
  })
  .put(async (req, res) => {
    // try {
    //   const product = await Product.findById({ _id: req.params.id }).exec();
    // } catch (err) {
    //   return res
    //     .status(400)
    //     .send({ err: true, message: "Id unknown for the product" });
    // }

    // for (let key in req.body) {
    //   product[key] = req.body[key];
    // }

    // try {
    //   await product.save();

    //   res.send(product);
    // } catch (err) {
    //   console.error(err.message);
    //   res
    //     .status(500)
    //     .send({ err: true, message: "Could not update the product" });
    // }

    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    ).exec();

    res.send(product);
    //
  });

//  UPDATE

// 1 / récupérer le produit à modifier

// 2 / modifier le produit récupéré

// 3 / sauvegarder le produit

module.exports = router;
