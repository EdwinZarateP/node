const express = require('express');
const app = express();
const port = 3000;

// ruta principal
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

// ruta productos
app.get('/productos', (req, res) => {
  res.json([
    {name:"p1", price:"5000"},
    {name:"p2", price:"4000"},
    {name:"p3", price:"3000"}
  ]);
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


app.listen(port, () => {
  console.log('Mi port' +  port);
});
