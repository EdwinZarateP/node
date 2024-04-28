const express = require('express');
const apiRutas = require('./rutas')
const app = express();
const port = 3000;

app.use(express.json());

// ruta principal
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

apiRutas(app);

app.listen(port, () => {
  console.log('Mi port' +  port);
});

