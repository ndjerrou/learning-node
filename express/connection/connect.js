const mongoose = require("mongoose");

const url =
  "mongodb+srv://ndjerrou:ndjerrou@db.tounu.mongodb.net/products?retryWrites=true&w=majority";

module.exports = async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connected to Database...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
