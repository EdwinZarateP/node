const express = require('express');
const { faker } = require('@faker-js/faker');

const rutas = express.Router();


// ruta productos
// ruta productos con cantidad de productos especificada
//por ejemplo pidamos 55 asi:  http://localhost:3000/productos?size=55

rutas.get('/', (req, res) => {
  const products=[];
  const { size }= req.query
  const limit=size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price(),10),
      image:faker.image.imageUrl()
    });

  }
  res.json(products);
})

// ruta a producto especifico
//http://localhost:3000/productos/productox
rutas.get('/:id', (req, res) => {
  const { id }= req.params
  res.json([
    {id, name:"p1", price:"5000"}
  ]);
})

module.exports = rutas;
