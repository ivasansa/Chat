// Constructor
function Sala(ID, nombre) {
  // always initialize all instance properties
  this.ID= ID;
  this.nombre = nombre;
  this.miembros = [];
  this.mensajes = [];
}
// export the class
module.exports = Sala;
