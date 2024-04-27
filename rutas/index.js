const rutaProductos=require('./productos.ruta');
const rutaCategorias=require('./categorias.ruta');
const rutaUsuarios=require('./usuarios.ruta');

function apiRutas(app){
  app.use('/productos', rutaProductos);
  app.use('/categorias', rutaCategorias);
  app.use('/usuarios', rutaUsuarios);
}

module.exports=apiRutas;
