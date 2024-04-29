const express = require('express');
const servicioProductos = require('./../servicios/productos.servicios')

const rutas = express.Router();
const servicio= new servicioProductos();


// ruta productos
// ruta productos con cantidad de productos especificada
//por ejemplo pidamos 55 asi:  http://localhost:3000/api/v1/productos?size=55

rutas.get('/', async (req, res) => {
  const productos=await servicio.buscar();
  res.json(productos);
})

// ruta a producto especifico
//http://localhost:3000/api/v1/productos/productox
rutas.get('/:id', async (req, res) => {
  const { id }= req.params
  const producto= await servicio.buscarUno(id);
  res.json(producto)
})

// vamos a crear un producto con POST:
// recuerde que para esto en el index original debe incluir app.use(express.json()); en el encabezado
rutas.post('/', async (req, res) => {
  const body= req.body
  const nuevoProducto = await servicio.crear(body);
  res.status(201).json(nuevoProducto);
})

// vamos a ACTUALIZAR un producto con 'PATCH'
//esto actualiza un producto en especifico
//http://localhost:3000/api/v1/productos/productox
rutas.patch('/:id', async (req, res) => {

  try {
  const { id }= req.params;
  const body= req.body;
  const producto = await servicio.actualizar(id, body);
  res.json(producto);
  } catch (error) {
    res.status(404).json({
      message:error.message
    })
  }

})

// vamos a ELIMINAR un producto con 'DELETE'
//esto elimina un producto en especifico
rutas.delete('/:id', async (req, res) => {
  const { id }= req.params
  const respuesta = await servicio.eliminar(id);
  res.json(respuesta);
})

module.exports = rutas;
