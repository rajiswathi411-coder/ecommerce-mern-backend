const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/Product");
const products = require("./products"); // your existing products.js

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log("MongoDB connected"))
  .catch((error)=> console.log(error))


const importData = async () => {
  try {
    await Product.deleteMany(); // Clear old products
    await Product.insertMany(products); // Insert all products
    console.log("Products Imported!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();