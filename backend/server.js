import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import products from "./data/products.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const productID = req.params.id;
  const product = products.find((p) => p._id === productID);
  res.json(product);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}...`
      .yellow.inverse
  )
);
