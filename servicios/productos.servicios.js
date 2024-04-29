const { faker } = require('@faker-js/faker');

class servicioProductos{

  constructor(){
    this.productos=[];
    this.generate();
  }

  generate(){
  const limit=100;
  for (let index = 0; index < limit; index++) {
    this.productos.push({
      id:faker.string.uuid(),
      name:faker.commerce.productName(),
      price:parseInt(faker.commerce.price(),10),
      image:faker.image.url()
      });
    }
  }

  async crear(datos){
    const nuevoProducto = {
      id:faker.string.uuid(),
      ...datos
    }
    this.productos.push(nuevoProducto);
    return nuevoProducto;
  }

  async buscar(){
    return this.productos;
  }

  async buscarUno(id){
    return this.productos.find(item => item.id===id)
  }

  async actualizar(id, cambios){
    const index= this.productos.findIndex(item => item.id===id)
    if(index===-1){
      throw new Error ('producto no encontrado');
    }
    const producto =this.productos[index];
    this.productos[index] = {
      ...producto,
      ...cambios
    };
    return this.productos[index];
  }

  async eliminar(id){
    const index= this.productos.findIndex(item => item.id===id);
    if(index===-1){
      throw new Error ('producto no encontrado');
    }
    this.productos.splice(index,1);
    return { id };
  }

}

module.exports = servicioProductos;
