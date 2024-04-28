const express = require('express');
const { faker } = require('@faker-js/faker');

const rutas = express.Router();


// ruta productos
// ruta productos con cantidad de productos especificada
//por ejemplo pidamos 55 asi:  http://localhost:3000/api/v1/productos?size=55

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
//http://localhost:3000/api/v1/productos/productox
rutas.get('/:id', (req, res) => {
  const { id }= req.params
  res.json([
    {id, name:"p1", price:"5000"}
  ]);
})

// vamos a crear un producto con POST:
// recuerde que para esto en el index original debe incluir app.use(express.json()); en el encabezado
rutas.post('/', (req, res) => {
  const body= req.body
  res.json({
    message:'Creado',
    data:body
  });
})

// vamos a ACTUALIZAR un producto con 'PATCH'
//esto actualiza un producto en especifico
rutas.patch('/:id', (req, res) => {
  const body= req.body
  const { id }= req.params
  res.json({
    message:'Producto actualizado',
    data:body,
    id
  });
})

// vamos a ELIMINAR un producto con 'DELETE'
//esto elimina un producto en especifico
rutas.delete('/:id', (req, res) => {
  const { id }= req.params
  res.json({
    message:'Producto eliminado',
    id
  });
})

module.exports = rutas;
