const express = require('express');
const { faker } = require('@faker-js/faker');

const rutas = express.Router();


// ruta usando query para buscar la categoria
// usemos este ejemplo http://localhost:3000/usuarios/?limit=50&offset=200
rutas.get('/', (req, res) => {
  const { limit, offset }= req.query
  if (limit && offset){
  res.json([
    {limit, offset}
  ]);} else{
    res.send('No escribio parametros');
  }
})

module.exports = rutas;
