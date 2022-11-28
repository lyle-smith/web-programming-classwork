const express = require('express');
const products = require('../models/products');

const app = express.Router();

app
  .get('/', (req, res, next) => {
    products.getProducts()
    .then(x =>  res.status(200).send(products.getProducts()))
    .catch(next);
  })
  .get('/:id', (req, res, next) => {

    products.getProduct(+req.params.id)
    .then((product) => {
      if (product) {
        res.status(200).send(product);
      } else {
        res.status(404).send('<b>' + req.params.id + '</b> not found');
      }
    })
    .catch(next);
  });

module.exports = app;