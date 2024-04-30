const express = require('express');
const cors = require('cors');
const apiRutas = require('./rutas')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/manejo.errores');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const listaBlanca=['https://localhost:8080','https://ejemplo.co'];
const opciones={
  origin:(origin, callback)=>{
    if(listaBlanca.includes(origin)|| !origin){
      callback(null, true);
    }else{
      callback(new Error('no permitido'));
    }
  }
}

app.use(cors(opciones));

// ruta principal
app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
})

apiRutas(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' +  port);
});

