// Constructor
function Mensaje(nombre, texto, fecha) {
  // always initialize all instance properties
  this.autor = nombre;
  this.texto = texto;
  this.fecha = fecha;
}
// class methods
Mensaje.prototype.fooBar = function() {

};
// export the class
module.exports = Mensaje;
