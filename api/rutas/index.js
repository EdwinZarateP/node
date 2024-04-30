const express = require('express');
const rutaProductos=require('./productos.ruta');
const rutaCategorias=require('./categorias.ruta');
const rutaUsuarios=require('./usuarios.ruta');

function apiRutas(app){

  const ruta = express.Router();
  app.use('/api/v1',ruta);
  ruta.use('/productos', rutaProductos);
  ruta.use('/categorias', rutaCategorias);
  ruta.use('/usuarios', rutaUsuarios);
}

module.exports=apiRutas;
