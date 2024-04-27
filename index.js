const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

// ruta principal
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

// ruta productos con cantidad de productos especificada
//por ejemplo pidamos 55 asi:  http://localhost:3000/productos?size=55
app.get('/productos', (req, res) => {
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
app.get('/producto/:id', (req, res) => {
  const { id }= req.params
  res.json([
    {id, name:"p1", price:"5000"}
  ]);
})

// ruta a categorias y producto especifico
app.get('/categoria/:categoryId/producto/:id', (req, res) => {
  const { categoryId, id}= req.params
  res.json([
    {categoryId, id}
  ]);
})

// ruta usando query
// usemos este ejemplo http://localhost:3000/users/?limit=50&offset=200
app.get('/users', (req, res) => {
  const { limit, offset }= req.query
  if (limit && offset){
  res.json([
    {limit, offset}
  ]);} else{
    res.send('No escribio parametros');
  }
})

app.listen(port, () => {
  console.log('Mi port' +  port);
});

