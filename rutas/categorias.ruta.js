const express = require('express');
const { faker } = require('@faker-js/faker');

const rutas = express.Router();


// ruta a categorias y producto especifico
//usemos el ejemplo http://localhost:3000/categorias/insumos/productos/queso
rutas.get('/:categoryId/productos/:id', (req, res) => {
  const { categoryId, id}= req.params
  res.json([
    {categoryId, id}
  ]);
})


module.exports = rutas;
